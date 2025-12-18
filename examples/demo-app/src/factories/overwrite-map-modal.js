import { ModalContainerFactory, useCloudListProvider } from '@kepler.gl/components';
import styled from 'styled-components';
import React, { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { toggleModal } from '@kepler.gl/actions';
import { FormattedMessage } from '@kepler.gl/localization';

// Local replacement for CenterVerticalFlexbox
const CenterVerticalFlexbox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

// Simplified loader to avoid importing generic UploadAnimation
const UploadAnimation = ({ icon }) => (
    <div style={{ textAlign: 'center', margin: '20px' }}>
        {icon && <icon height="48px" />}
        <div>Saving...</div>
    </div>
);

// CRITICAL FIX: Extract the exact factory reference used by ModalContainer
// to ensure injectComponents matches it correctly.
const CoreFactory = ModalContainerFactory.deps[1];

// We need to re-implement the styles because we can't easily import them from source if build is separate.
const StyledMsg = styled.div`
  margin-top: 24px;
  font-size: 14px;
`;

const StyledTitle = styled.span`
  font-weight: 600;
  color: black;
`;

const StyledIcon = styled.div`
  margin-top: 24px;
`;

const StyledOverwriteMapModal = styled(CenterVerticalFlexbox)`
  padding: 24px 12px;
  min-height: 220px;
`;

const CONFIRM_BUTTON = {
    large: true,
    children: 'Yes',
    disabled: false
};

// DIRECT RE-IMPLEMENTATION OF THE MODAL
// To ensure we bypass any build/linking issues with the core library.
export const CustomOverwriteMapModalFactory = (...deps) => {
    const OverwriteMapModal = (props) => {
        const { mapSaved, title, isProviderLoading, onUpdateImageSetting, cleanupExportImage, onCancel, onConfirm } = props;
        const { provider, cloudProviders, setProvider } = useCloudListProvider();
        const dispatch = useDispatch();

        useEffect(() => {
            console.log('CustomOverwriteMapModal: Mounted', { provider, cloudProviders });
            if (!provider && cloudProviders && cloudProviders.length > 0) {
                // Force set provider
                console.log('CustomOverwriteMapModal: Auto-selecting provider', cloudProviders[0]);
                setProvider(cloudProviders[0]);
            }

            // HACK: Hide the default modal title "Overwrite Existing File?"
            // This title is rendered by the parent ModalDialog and cannot be controlled via props here.
            const timer = setTimeout(() => {
                const titles = document.querySelectorAll('.modal--title');
                titles.forEach(el => {
                    // Check for English or localized text just in case
                    if (el.textContent.includes('Overwrite Existing File') || el.textContent === 'Overwrite Existing File?') {
                        el.style.display = 'none';
                    }
                });
            }, 50); // Small delay to ensure render

            return () => clearTimeout(timer);
        }, [provider, cloudProviders, setProvider]);

        const onConfirmClick = () => {
            console.log('CustomOverwriteMapModal: YES Clicked! Switching to NEW SAVE modal');
            // Bypass overwrite logic and toggle the SaveMapModal directly.
            // This corresponds to "Save as New" behavior.
            dispatch(toggleModal('saveMap'));
        };

        return (
            <div className="overwrite-map-modal-container" style={{ padding: '24px' }}>
                <StyledOverwriteMapModal className="overwrite-map-modal">
                    {isProviderLoading ? (
                        <StyledMsg>
                            <StyledTitle>
                                <FormattedMessage id={'modal.overwriteMap.title'} />
                            </StyledTitle>
                            <UploadAnimation icon={provider && provider.icon} />
                        </StyledMsg>
                    ) : (
                        <>
                            <StyledIcon>
                                {provider && provider.icon ? <provider.icon height="64px" /> : null}
                            </StyledIcon>
                            <StyledMsg className="overwrite-map-msg">
                                <StyledTitle>保存しなおしますか？</StyledTitle>
                                <div style={{ marginTop: '10px', fontSize: '13px', color: '#333' }}>
                                    新規プロジェクトファイルとして保存されます。
                                </div>
                                {/* <div style={{ marginTop: '10px', fontSize: '12px', color: '#666' }}>
                                    ※既存のファイルとは別に、新しい履歴として保存されます。
                                </div> */}
                            </StyledMsg>
                        </>
                    )}
                </StyledOverwriteMapModal>
                <div className="custom-modal-footer" style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    paddingTop: '24px',
                    width: '100%',
                    zIndex: 2147483647, // Max Z-Index
                    position: 'relative' // Ensure Z-index works
                }}>
                    <button
                        type="button"
                        className="button"
                        onClick={onCancel}
                        style={{
                            background: 'transparent',
                            border: 'none',
                            color: '#6A7485',
                            cursor: 'pointer',
                            fontSize: '11px',
                            fontWeight: 500,
                            padding: '9px 12px',
                            marginRight: '8px',
                            textTransform: 'uppercase'
                        }}
                    >
                        キャンセル
                    </button>
                    <button
                        type="button"
                        className="button primary"
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            onConfirmClick();
                        }}
                        style={{
                            background: '#2ba7f0', // Kepler blue
                            border: 'none',
                            color: 'white',
                            cursor: 'pointer',
                            fontSize: '11px',
                            fontWeight: 500,
                            padding: '9px 12px',
                            borderRadius: '2px',
                            textTransform: 'uppercase',
                            minWidth: '105px'
                        }}
                    >
                        はい
                    </button>
                </div>
            </div>
        );
    };
    return OverwriteMapModal;
};

// Standard dependency export
CustomOverwriteMapModalFactory.deps = CoreFactory.deps;

export function replaceOverwriteMapModal() {
    return [CoreFactory, CustomOverwriteMapModalFactory];
}
