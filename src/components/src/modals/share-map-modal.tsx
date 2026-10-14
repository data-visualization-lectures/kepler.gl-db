// SPDX-License-Identifier: MIT
// Copyright contributors to the kepler.gl project

import React, {useEffect, useState, useMemo, useRef} from 'react';
import styled, {ThemeProvider} from 'styled-components';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {media, themeLT} from '@kepler.gl/styles';
import ImageModalContainer, {ImageModalContainerProps} from './image-modal-container';

import {
  StyledModalContent,
  StyledExportSection,
  InputLight,
  Button
} from '../common/styled-components';
import StatusPanel from './status-panel';
import {FormattedMessage} from '@kepler.gl/localization';
import {useCloudListProvider} from '../hooks/use-cloud-list-provider';
import {ProviderSelect} from './cloud-components/provider-select';
import {Provider} from '@kepler.gl/cloud-providers';
import {cleanupExportImage as cleanupExportImageAction} from '@kepler.gl/actions';
import {dataTestIds} from '@kepler.gl/constants';

export const StyledInputLabel = styled.label`
  font-size: 12px;
  color: ${props => props.theme.textColorLT};
  letter-spacing: 0.2px;
`;

export const StyleSharingUrl = styled.div.attrs({
  className: 'sharing-url'
})`
  width: 100%;
  display: flex;
  margin-bottom: 14px;
  flex-direction: column;

  input {
    border-right: 0;
    min-width: 0;
    flex: 1;
  }

  .button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    flex-shrink: 0;
  }
`;

interface SharingUrlProps {
  url: string;
  message?: string;
}

export const SharingUrl: React.FC<SharingUrlProps> = ({url, message = ''}) => {
  const [copied, setCopy] = useState(false);
  return (
    <StyleSharingUrl>
      <StyledInputLabel>{message}</StyledInputLabel>
      <div style={{display: 'flex'}}>
        <InputLight type="text" value={url} readOnly />
        <CopyToClipboard text={url} onCopy={() => setCopy(true)}>
          <Button width="80px">
            <FormattedMessage id={copied ? 'modal.button.copied' : 'modal.button.copy'} />
          </Button>
        </CopyToClipboard>
      </div>
    </StyleSharingUrl>
  );
};
const nop = () => {
  return;
};

const StyledShareMapModal = styled(StyledModalContent)`
  padding: 16px 0 0;
  margin: 0;
  flex-direction: column;

  ${StyledExportSection} {
    margin: 0 0 16px;

    .selection {
      min-width: 0;

      > div {
        min-width: 0;
        max-width: 100%;
      }

      svg {
        min-width: 0;
      }
    }
  }

  .notification-item {
    box-sizing: border-box;
    max-width: 100%;
    height: auto;
  }

  .notification-item--message {
    min-width: 0;
    overflow-wrap: anywhere;
  }

  ${StyleSharingUrl} {
    margin-bottom: 0;
  }

  ${media.portable`
    padding: 16px 0 0;
    margin: 0;
  `}

  ${media.palm`
    ${StyledExportSection} {
      flex-direction: column;
      gap: 8px;

      .description {
        width: 100%;
      }

      .selection {
        padding-left: 0;
      }
    }
  `}
`;

const UNDERLINE_TEXT_DECORATION_STYLE = {textDecoration: 'underline'};

const ShareMapHeader = ({cloudProviders}) => {
  return (
    <StyledExportSection>
      <div className="description">
        <div className="title">
          <FormattedMessage id={'modal.shareMap.title'} />
        </div>
      </div>
      <ProviderSelect cloudProviders={cloudProviders} />
    </StyledExportSection>
  );
};

interface ShareMapUrlModalFactoryProps {
  isProviderLoading?: boolean;
  onExport?: (provider: Provider) => void;
  providerError?: string;
  successInfo?: {shareUrl?: string; folderLink?: string};
  onUpdateImageSetting: ImageModalContainerProps['onUpdateImageSetting'];
  cleanupExportImage: typeof cleanupExportImageAction;
}

export default function ShareMapUrlModalFactory() {
  const ShareMapUrlModal: React.FC<ShareMapUrlModalFactoryProps> = ({
    isProviderLoading = false,
    onExport = nop,
    providerError = null,
    successInfo = {},
    onUpdateImageSetting = nop,
    cleanupExportImage
  }) => {
    const {provider: selectedProvider, cloudProviders} = useCloudListProvider();
    const shareableCloudProviders = useMemo(
      () => cloudProviders.filter(cp => cp.hasSharingUrl()),
      [cloudProviders]
    );
    const provider =
      shareableCloudProviders.length === 1
        ? shareableCloudProviders[0]
        : shareableCloudProviders.find(cp => cp === selectedProvider);
    const exportedProvider = useRef<Provider | null>(null);
    const {shareUrl, folderLink} = successInfo;

    useEffect(() => {
      if (provider && exportedProvider.current !== provider) {
        exportedProvider.current = provider;
        onExport(provider);
      } else if (!provider) {
        exportedProvider.current = null;
      }
    }, [onExport, provider]);

    return (
      <ThemeProvider theme={themeLT}>
        <ImageModalContainer
          provider={provider}
          onUpdateImageSetting={onUpdateImageSetting}
          cleanupExportImage={cleanupExportImage}
        >
          <StyledShareMapModal className="export-cloud-modal">
            {shareableCloudProviders.length !== 1 && (
              <ShareMapHeader cloudProviders={shareableCloudProviders} />
            )}
            {provider ? (
              <div data-testid={dataTestIds.providerShareMap}>
                <StyledExportSection>
                  <div className="description">
                    <div className="title">
                      <FormattedMessage id={'modal.shareMap.shareUriTitle'} />
                    </div>
                    <div className="subtitle">
                      <FormattedMessage id={'modal.shareMap.shareUriSubtitle'} />
                    </div>
                  </div>
                  <div className="selection">
                    <div className="title warning">
                      <FormattedMessage id={'modal.shareMap.shareDisclaimer'} />
                    </div>
                  </div>
                </StyledExportSection>
                <StyledExportSection disabled={isProviderLoading}>
                  <div className="description">
                    <div className="title">
                      <FormattedMessage id={'modal.shareMap.cloudTitle'} />
                    </div>
                    <div className="subtitle">
                      <FormattedMessage id={'modal.shareMap.cloudSubtitle'} />
                    </div>
                  </div>
                </StyledExportSection>
                {isProviderLoading || providerError ? (
                  <StatusPanel
                    isLoading={isProviderLoading}
                    error={providerError}
                    providerIcon={provider.icon}
                  />
                ) : null}
                {shareUrl && (
                  <StyledExportSection>
                    <div className="description">
                      <div className="title">
                        <FormattedMessage id={'modal.shareMap.generatedUrlTitle'} />
                      </div>
                    </div>
                    <div className="selection">
                      <SharingUrl key={0} url={shareUrl} />
                      {provider && folderLink && (
                        <a
                          key={1}
                          href={folderLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={UNDERLINE_TEXT_DECORATION_STYLE}
                        >
                          {provider.name}
                        </a>
                      )}
                    </div>
                  </StyledExportSection>
                )}
              </div>
            ) : null}
          </StyledShareMapModal>
        </ImageModalContainer>
      </ThemeProvider>
    );
  };

  return ShareMapUrlModal;
}
