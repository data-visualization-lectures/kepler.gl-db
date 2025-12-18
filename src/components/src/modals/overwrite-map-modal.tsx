// SPDX-License-Identifier: MIT
// Copyright contributors to the kepler.gl project

import React, { useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { CenterVerticalFlexbox } from '../common/styled-components';
import { UploadAnimation } from './status-panel';
import { FormattedMessage } from '@kepler.gl/localization';
import ImageModalContainer, { ImageModalContainerProps } from './image-modal-container';
import { Provider } from '@kepler.gl/cloud-providers';
import { cleanupExportImage as cleanupExportImageAction } from '@kepler.gl/actions';
import { useCloudListProvider } from '../hooks/use-cloud-list-provider';
import { ModalFooter } from '../common/modal';

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

type OverwriteMapModalProps = {
  mapSaved: string | null;
  title: string;
  isProviderLoading: boolean;

  // callbacks
  onUpdateImageSetting: ImageModalContainerProps['onUpdateImageSetting'];
  cleanupExportImage: typeof cleanupExportImageAction;
  onConfirm: (provider: Provider) => void;
  onCancel: () => void;
};

const CONFIRM_BUTTON = {
  large: true,
  children: 'Yes',
  disabled: false
};

const OverwriteMapModalFactory = () => {
  /**
   * @type {React.FunctionComponent<OverwriteMapModalProps>}
   */
  const OverwriteMapModal: React.FC<OverwriteMapModalProps> = ({
    mapSaved,
    title,
    isProviderLoading,
    onUpdateImageSetting,
    cleanupExportImage,
    onCancel,
    onConfirm
  }) => {
    const { provider, cloudProviders, setProvider } = useCloudListProvider();

    useEffect(() => {
      if (!provider && cloudProviders && cloudProviders.length > 0) {
        // Automatically Select the first provider if none selected
        // In a real scenario we might want to know which provider the map belongs to
        // But for standard overwrite, default to the first available (usually the main one)
        setProvider(cloudProviders[0]);
      }
    }, [provider, cloudProviders, setProvider]);

    const confirmButton = useMemo(
      () => ({
        ...CONFIRM_BUTTON,
        disabled: !provider
      }),
      [provider]
    );

    return (
      <ImageModalContainer
        provider={provider}
        onUpdateImageSetting={onUpdateImageSetting}
        cleanupExportImage={cleanupExportImage}
      >
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
                <StyledTitle>{title} </StyledTitle>
                <FormattedMessage id={'modal.overwriteMap.alreadyExists'} values={{ mapSaved }} />
              </StyledMsg>
            </>
          )}
        </StyledOverwriteMapModal>
        <ModalFooter
          cancel={onCancel}
          confirm={() => {
            console.log('Core OverwriteMapModal: Confirm Clicked', { provider });
            if (provider) {
              onConfirm(provider);
            } else {
              console.error('Core OverwriteMapModal: Provider is null on click');
            }
          }}
          confirmButton={confirmButton}
        />
      </ImageModalContainer>
    );
  };
  return OverwriteMapModal;
};

export const OverwriteMapModal = OverwriteMapModalFactory();
export default OverwriteMapModalFactory;
