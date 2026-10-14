// SPDX-License-Identifier: MIT
// Copyright contributors to the kepler.gl project

import React from 'react';
import {fireEvent, render, waitFor} from '@testing-library/react';
import {IntlWrapper, renderWithTheme} from 'test/helpers/component-jest-utils';
import {ThemeProvider} from 'styled-components';
import {theme} from '@kepler.gl/styles';
import {Provider} from '@kepler.gl/cloud-providers';
import {CloudListProvider} from '../hooks/use-cloud-list-provider';
import ShareMapUrlModalFactory from './share-map-modal';
import {dataTestIds} from '@kepler.gl/constants';

const ShareMapUrlModal = ShareMapUrlModalFactory();

const createProvider = (name = 'Dataviz Cloud', shareable = true) =>
  Object.assign(new Provider({name, displayName: name, icon: () => null}), {
    getUser: jest.fn().mockResolvedValue({name: 'Test user'}),
    hasSharingUrl: () => shareable
  });

const createProps = () => ({
  isProviderLoading: false,
  onExport: jest.fn(),
  providerError: undefined,
  successInfo: {},
  onUpdateImageSetting: jest.fn(),
  cleanupExportImage: jest.fn()
});

function renderModal(providers, props = createProps()) {
  const content = modalProps => (
    <CloudListProvider providers={providers}>
      <ShareMapUrlModal {...modalProps} />
    </CloudListProvider>
  );
  const result = render(content(props), {
    wrapper: ({children}) => (
      <ThemeProvider theme={theme}>
        <IntlWrapper>{children}</IntlWrapper>
      </ThemeProvider>
    )
  });
  return {...result, update: modalProps => result.rerender(content(modalProps))};
}

describe('ShareMapModal', () => {
  test('does not export when no sharing providers are available', () => {
    const props = createProps();
    const {getByText, queryByTestId} = renderModal([createProvider('Private cloud', false)], props);

    expect(getByText('No storage provider available')).toBeInTheDocument();
    expect(queryByTestId(dataTestIds.providerShareMap)).toBeNull();
    expect(props.onExport).not.toHaveBeenCalled();
  });

  test('automatically uses the only sharing provider without showing the selector', () => {
    const provider = createProvider();
    const props = createProps();
    const {getByTestId, queryByTestId} = renderModal(
      [createProvider('Private cloud', false), provider],
      props
    );

    expect(queryByTestId(dataTestIds.providerSelect)).toBeNull();
    expect(getByTestId(dataTestIds.providerShareMap)).toBeInTheDocument();
    expect(props.onExport).toHaveBeenCalledTimes(1);
    expect(props.onExport).toHaveBeenCalledWith(provider);
  });

  test('does not generate another URL when status or the callback changes', () => {
    const props = createProps();
    const {update, getByDisplayValue, getByText} = renderModal([createProvider()], props);
    update({...props, isProviderLoading: true});
    expect(getByText('Map Uploading')).toBeInTheDocument();
    update({...props, successInfo: {shareUrl: 'https://example.com/shares/test'}});
    expect(getByDisplayValue('https://example.com/shares/test')).toBeInTheDocument();
    expect(props.onExport).toHaveBeenCalledTimes(1);

    const nextExport = jest.fn();
    update({...props, onExport: nextExport});
    expect(nextExport).not.toHaveBeenCalled();
  });

  test('does not export twice when StrictMode replays effects', () => {
    const props = createProps();
    renderWithTheme(
      <React.StrictMode>
        <CloudListProvider providers={[createProvider()]}>
          <ShareMapUrlModal {...props} />
        </CloudListProvider>
      </React.StrictMode>
    );
    expect(props.onExport).toHaveBeenCalledTimes(1);
  });

  test('keeps provider selection when multiple sharing providers are available', async () => {
    const first = createProvider('First cloud');
    const second = createProvider('Second cloud');
    const props = createProps();
    const {getByText, getByTestId, queryByTestId} = renderModal([first, second], props);

    expect(getByTestId(dataTestIds.providerSelect)).toBeInTheDocument();
    expect(queryByTestId(dataTestIds.providerShareMap)).toBeNull();
    expect(props.onExport).not.toHaveBeenCalled();
    await waitFor(() =>
      expect(getByText('First cloud').parentElement).toHaveTextContent('Test user')
    );

    fireEvent.click(getByText('First cloud'));
    expect(props.onExport).toHaveBeenLastCalledWith(first);
    fireEvent.click(getByText('Second cloud'));
    expect(props.onExport).toHaveBeenLastCalledWith(second);
    expect(props.onExport).toHaveBeenCalledTimes(2);
  });

  test('shows errors without retrying automatically', () => {
    const props = createProps();
    const {getByText, update} = renderModal([createProvider()], props);
    update({...props, providerError: 'Unable to publish map'});

    expect(getByText('Error')).toBeInTheDocument();
    expect(getByText('Unable to publish map')).toBeInTheDocument();
    expect(props.onExport).toHaveBeenCalledTimes(1);
  });

  test('copies the generated URL and shows confirmation', () => {
    const execCommand = jest.fn().mockReturnValue(true);
    Object.defineProperty(document, 'execCommand', {configurable: true, value: execCommand});
    const props = {...createProps(), successInfo: {shareUrl: 'https://example.com/shares/test'}};
    const {getByText} = renderModal([createProvider()], props);

    fireEvent.click(getByText('Copy'));
    expect(execCommand).toHaveBeenCalledWith('copy');
    expect(getByText('Copied!')).toBeInTheDocument();
    Reflect.deleteProperty(document, 'execCommand');
  });

  test('starts a new share operation when the modal is reopened', () => {
    const provider = createProvider();
    const props = createProps();
    const {unmount} = renderModal([provider], props);
    unmount();
    expect(props.cleanupExportImage).toHaveBeenCalledTimes(1);

    renderModal([provider], props);
    expect(props.onExport).toHaveBeenCalledTimes(2);
  });
});
