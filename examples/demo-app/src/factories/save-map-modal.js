import React, { useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { SaveMapModalFactory, useCloudListProvider, ImagePreview } from '@kepler.gl/components';
import { FormattedMessage } from '@kepler.gl/localization';

// Styled components to mimic Kepler UI
const StyledModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
`;

const StyledSection = styled.div`
  margin-bottom: 16px;
`;

const SectionTitle = styled.div`
  font-weight: 500;
  font-size: 12px;
  color: ${props => props.theme.textColor};
  margin-bottom: 8px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 8px;
  background-color: ${props => props.theme.inputBgc};
  border: 1px solid ${props => props.theme.inputBorderColor || '#3A414C'};
  border-radius: 4px;
  color: ${props => props.theme.inputColor};
  font-size: 14px;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.primaryBtnBgc};
  }
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  background-color: ${props => props.theme.inputBgc};
  border: 1px solid ${props => props.theme.inputBorderColor || '#3A414C'};
  border-radius: 4px;
  color: ${props => props.theme.inputColor};
  font-size: 14px;
  resize: none;
  height: 80px;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.primaryBtnBgc};
  }
`;

const StyledFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
`;

const Button = styled.button`
  background-color: ${props => props.primary ? props.theme.primaryBtnBgc : 'transparent'};
  color: ${props => props.primary ? '#fff' : props.theme.textColor};
  border: none;
  border-radius: 2px;
  padding: 10px 16px;
  font-size: 11px;
  font-weight: 500;
  cursor: pointer;
  text-transform: uppercase;
  margin-left: 8px;
  opacity: ${props => props.disabled ? 0.5 : 1};
  pointer-events: ${props => props.disabled ? 'none' : 'auto'};
  transition: all 0.2s;

  &:hover {
    background-color: ${props => props.primary ? props.theme.primaryBtnBgcHover : 'rgba(255,255,255,0.1)'};
  }
`;

const ImagePreviewContainer = styled.div`
  margin-bottom: 16px;
  border: 1px solid ${props => props.theme.inputBorderColor || '#3A414C'};
  padding: 4px;
  border-radius: 4px;
`;

export const CustomSaveMapModalFactory = () => {
    const SaveMapModal = ({
        mapInfo = {},
        exportImage,
        onSetMapInfo,
        onConfirm,
        onCancel
    }) => {
        const { provider, cloudProviders, setProvider } = useCloudListProvider();

        // Auto-select provider on mount if not set
        useEffect(() => {
            if (!provider && cloudProviders && cloudProviders.length > 0) {
                setProvider(cloudProviders[0]);
            }
        }, [provider, cloudProviders, setProvider]);

        const handleTitleChange = (e) => {
            onSetMapInfo({ ...mapInfo, title: e.target.value });
        };

        const handleDescriptionChange = (e) => {
            onSetMapInfo({ ...mapInfo, description: e.target.value });
        };

        const handleSave = () => {
            // Use current provider OR fallback to first available
            const providerToUse = provider || (cloudProviders && cloudProviders.length > 0 ? cloudProviders[0] : null);

            if (providerToUse) {
                onConfirm(providerToUse);
            } else {
                console.error('No cloud provider available to save');
            }
        };

        // Disabled ONLY if title is empty. We ignore provider state for disabling button
        // to prevent the issue user reported. Logic above handles "missing provider" by finding it just-in-time.
        const isSaveDisabled = !mapInfo.title;

        return (
            <StyledModalContainer>
                <div style={{ marginBottom: '20px' }}>
                    <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 500 }}>プロジェクトの保存</h2>
                    <p style={{ margin: '8px 0 0', fontSize: '12px', color: '#A0A7B4' }}>
                        現在の地図設定をクラウドストレージに保存します。
                    </p>
                </div>

                <StyledSection>
                    <SectionTitle>名前 *</SectionTitle>
                    <StyledInput
                        value={mapInfo.title || ''}
                        onChange={handleTitleChange}
                        placeholder="プロジェクト名を入力"
                    />
                </StyledSection>

                <StyledSection>
                    <SectionTitle>説明</SectionTitle>
                    <StyledTextArea
                        value={mapInfo.description || ''}
                        onChange={handleDescriptionChange}
                        placeholder="説明を入力（任意）"
                    />
                </StyledSection>

                <SectionTitle>プレビュー</SectionTitle>
                <ImagePreviewContainer>
                    {/* ImagePreview might not be exported correctly in all versions, fallback safely */}
                    {ImagePreview ? (
                        <ImagePreview exportImage={exportImage} width={400} showDimension={false} />
                    ) : (
                        <div style={{ height: '200px', background: '#000', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            Preview Image
                        </div>
                    )}
                </ImagePreviewContainer>

                <StyledFooter>
                    <Button onClick={onCancel}>キャンセル</Button>
                    <Button primary disabled={isSaveDisabled} onClick={handleSave}>
                        保存
                    </Button>
                </StyledFooter>
            </StyledModalContainer>
        );
    };

    return SaveMapModal;
};

export function replaceSaveMapModal() {
    return [SaveMapModalFactory, CustomSaveMapModalFactory];
}
