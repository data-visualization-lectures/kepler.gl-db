import { ModalContainerFactory, useCloudListProvider, ModalFooter } from '@kepler.gl/components';
import styled from 'styled-components';
import React, { useEffect, useMemo } from 'react';
import { FormattedMessage } from '@kepler.gl/localization';

// CRITICAL FIX: Extract the exact factory reference used by ModalContainer
// to ensure injectComponents matches it correctly.
const CoreFactory = ModalContainerFactory.deps[1];

console.log('CustomOverwriteMapModal Factory: Module Loaded');
console.log('CustomOverwriteMapModal Factory: Extracted CoreFactory from Deps', CoreFactory);

if (!CoreFactory) {
    console.error('CustomOverwriteMapModal Factory: FAILED TO FIND CORE FACTORY at index 1');
}

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
    // If we can't import ImageModalContainer easily, we rely on the injected one or default.
    // However, to be 100% sure, let's just make a simple modal content.

    const OverwriteMapModal = (props) => {
        const { mapSaved, title, isProviderLoading, onUpdateImageSetting, cleanupExportImage, onCancel, onConfirm } = props;
        const { provider, cloudProviders, setProvider } = useCloudListProvider();

        useEffect(() => {
            console.log('CustomOverwriteMapModal: Mounted', { provider, cloudProviders });
            if (!provider && cloudProviders && cloudProviders.length > 0) {
                // Force set provider
                console.log('CustomOverwriteMapModal: Auto-selecting provider', cloudProviders[0]);
                setProvider(cloudProviders[0]);
            }
        }, [provider, cloudProviders, setProvider]);

        const confirmButton = useMemo(() => ({
            ...CONFIRM_BUTTON,
            disabled: false // FORCE ENABLE
        }), []);

        const onConfirmClick = () => {
            console.log('CustomOverwriteMapModal: YES Clicked!');
            const targetProvider = provider || (cloudProviders && cloudProviders[0]);
            if (targetProvider) {
                console.log('CustomOverwriteMapModal: Executing onConfirm with', targetProvider);
                onConfirm(targetProvider);
            } else {
                console.error('CustomOverwriteMapModal: No provider found!');
            }
        };

        // We will return a structure that mimics what ImageModalContainer renders, 
        // OR we can try to use the passed `ImageModalContainer` if it was injected. 
        // But since we are replacing the factory, we might not have access to internal components easily.

        // Let's rely on the fact that OverwriteMapModal is usually wrapped in a ModalDialog by the container.
        // We just render the content.

        // Wait, the factory usually returns a component that renders ImageModalContainer.
        // We will use the DefaultModal from the CoreFactory but intercept the render? No, that failed before.

        // We will try to utilize the DOM structure.
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
                                <StyledTitle>既存プロジェクトファイルを上書き保存しますか？</StyledTitle>
                                <div style={{ marginTop: '10px', fontSize: '12px', color: '#666' }}>
                                    ※実際には上書きされず、新しい履歴として保存されます。
                                </div>
                            </StyledMsg>
                        </>
                    )}
                </StyledOverwriteMapModal>
                <ModalFooter
                    cancel={onCancel}
                    confirm={onConfirmClick}
                    confirmButton={confirmButton}
                />
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
