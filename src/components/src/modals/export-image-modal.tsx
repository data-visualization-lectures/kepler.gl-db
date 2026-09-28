// SPDX-License-Identifier: MIT
// Copyright contributors to the kepler.gl project

import React, {useEffect, useMemo} from 'react';
import styled from 'styled-components';
import ImagePreview from '../common/image-preview';
import {SetExportImageSettingUpdaterAction} from '@kepler.gl/actions';

import {EXPORT_IMG_RATIO_OPTIONS, EXPORT_IMG_RESOLUTION_OPTIONS} from '@kepler.gl/constants';
import {ExportImage} from '@kepler.gl/types';
import {VisState} from '@kepler.gl/schemas';
import {countSvgVectorElements, getRenderedLayers, getSvgExportMode} from '@kepler.gl/utils';
import {StyledModalContent, SelectionButton, CheckMark} from '../common/styled-components';
import Switch from '../common/switch';
import Checkbox from '../common/checkbox';
import {injectIntl, IntlShape} from 'react-intl';
import {FormattedMessage} from '@kepler.gl/localization';

const SVG_HEAVY_ELEMENT_COUNT = 50000;

const EXPORT_FORMAT_OPTIONS: {id: ExportImage['format']; label: string}[] = [
  {id: 'png', label: 'PNG'},
  {id: 'svg', label: 'SVG'}
];

const SVG_BASEMAP_OPTIONS: {id: ExportImage['svgBasemap']; label: string}[] = [
  {id: 'none', label: 'modal.exportImage.svgBasemapNone'},
  {id: 'raster', label: 'modal.exportImage.svgBasemapRaster'}
];

const SVG_MODE_LABELS = {
  vector: 'modal.exportImage.svgModeVector',
  raster: 'modal.exportImage.svgModeRaster',
  unsupported: 'modal.exportImage.svgModeUnsupported'
};

const StyledSvgLayerList = styled.div`
  padding: 8px 0;

  .svg-layer-row {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 3px 0;
  }

  .svg-layer-row__name {
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    .kg-checkbox__label {
      margin-bottom: 0;
    }
  }

  .svg-layer-row__mode {
    flex-shrink: 0;
    margin-left: 8px;
    line-height: 20px;
    font-size: 11px;
    color: ${props => props.theme.labelColorLT};
  }

  .svg-layer-row__mode--unsupported {
    color: ${props => props.theme.subtextColorLT};
  }
`;

const StyledNote = styled.div<{warning?: boolean}>`
  font-size: 11px;
  line-height: 1.5;
  padding-top: 4px;
  color: ${props => (props.warning ? props.theme.errorColor : props.theme.labelColorLT)};
`;

const ImageOptionList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 250px;

  .image-option-section {
    .image-option-section-title {
      font-weight: 500;
      font-size: 14px;
    }
  }

  .button-list {
    display: flex;
    flex-direction: row;
    padding: 8px 0px;
  }

  input {
    margin-right: 8px;
  }
`;

export interface ExportImageModalProps {
  exportImage: ExportImage;
  mapW: number;
  mapH: number;
  visState: VisState;
  isSplit: boolean;
  onUpdateImageSetting: (payload: SetExportImageSettingUpdaterAction['payload']) => void;
  cleanupExportImage: () => void;
  intl: IntlShape;
}

const ExportImageModalFactory = () => {
  const ExportImageModal: React.FC<ExportImageModalProps> = ({
    mapW,
    mapH,
    exportImage,
    visState,
    isSplit,
    onUpdateImageSetting,
    cleanupExportImage,
    intl
  }) => {
    const {legend, ratio, resolution, format, svgBasemap, svgExcludedLayerIds, svgZip} =
      exportImage;
    const isSvg = format === 'svg' && !isSplit;

    const svgLayers = useMemo(
      () =>
        isSvg
          ? getRenderedLayers(visState).map(({layer}) => ({
              id: layer.id,
              label: layer.config.label || layer.type,
              mode: getSvgExportMode(layer)
            }))
          : [],
      [isSvg, visState]
    );
    const vectorElementCount = useMemo(
      () => (isSvg ? countSvgVectorElements(visState, svgExcludedLayerIds) : 0),
      [isSvg, visState, svgExcludedLayerIds]
    );

    const toggleSvgLayer = (layerId: string) => {
      onUpdateImageSetting({
        svgExcludedLayerIds: svgExcludedLayerIds.includes(layerId)
          ? svgExcludedLayerIds.filter(id => id !== layerId)
          : [...svgExcludedLayerIds, layerId]
      });
    };

    useEffect(() => {
      onUpdateImageSetting({
        exporting: true
      });
      return cleanupExportImage;
    }, [onUpdateImageSetting, cleanupExportImage]);

    useEffect(() => {
      if (mapH !== exportImage.mapH || mapW !== exportImage.mapW) {
        onUpdateImageSetting({
          mapH,
          mapW
        });
      }
    }, [mapH, mapW, exportImage, onUpdateImageSetting]);

    return (
      <StyledModalContent className="export-image-modal">
        <ImageOptionList>
          <div className="image-option-section">
            <div className="image-option-section-title">
              <FormattedMessage id={'modal.exportImage.formatTitle'} />
            </div>
            <FormattedMessage id={'modal.exportImage.formatDescription'} />
            <div className="button-list" id="export-image-modal__option_format">
              {EXPORT_FORMAT_OPTIONS.map(op => {
                const disabled = op.id === 'svg' && isSplit;
                const selected = op.id === 'svg' ? isSvg : !isSvg;
                return (
                  <SelectionButton
                    key={op.id}
                    selected={selected}
                    style={disabled ? {opacity: 0.4, cursor: 'not-allowed'} : undefined}
                    onClick={() => !disabled && onUpdateImageSetting({format: op.id})}
                  >
                    {op.label}
                    {selected && <CheckMark />}
                  </SelectionButton>
                );
              })}
            </div>
            {isSplit ? (
              <StyledNote>
                <FormattedMessage id={'modal.exportImage.svgSplitUnsupported'} />
              </StyledNote>
            ) : null}
          </div>
          {isSvg ? (
            <>
              <div className="image-option-section">
                <div className="image-option-section-title">
                  <FormattedMessage id={'modal.exportImage.svgLayersTitle'} />
                </div>
                <FormattedMessage id={'modal.exportImage.svgLayersDescription'} />
                <StyledSvgLayerList id="export-image-modal__option_svg-layers">
                  {svgLayers.map(layer => {
                    const unsupported = layer.mode === 'unsupported';
                    return (
                      <div className="svg-layer-row" key={layer.id}>
                        <div className="svg-layer-row__name" title={layer.label}>
                          <Checkbox
                            type="checkbox"
                            id={`export-image-svg-layer-${layer.id}`}
                            label={layer.label}
                            checked={!unsupported && !svgExcludedLayerIds.includes(layer.id)}
                            disabled={unsupported}
                            onChange={() => toggleSvgLayer(layer.id)}
                          />
                        </div>
                        <span
                          className={`svg-layer-row__mode${
                            unsupported ? ' svg-layer-row__mode--unsupported' : ''
                          }`}
                          title={
                            unsupported
                              ? intl.formatMessage({id: 'modal.exportImage.svgUnsupportedReason'})
                              : undefined
                          }
                        >
                          <FormattedMessage id={SVG_MODE_LABELS[layer.mode]} />
                        </span>
                      </div>
                    );
                  })}
                </StyledSvgLayerList>
                {vectorElementCount > SVG_HEAVY_ELEMENT_COUNT ? (
                  <StyledNote warning>
                    <FormattedMessage
                      id={'modal.exportImage.svgHeavyWarning'}
                      values={{count: vectorElementCount.toLocaleString()}}
                    />
                  </StyledNote>
                ) : null}
              </div>
              <div className="image-option-section">
                <div className="image-option-section-title">
                  <FormattedMessage id={'modal.exportImage.svgBasemapTitle'} />
                </div>
                <FormattedMessage id={'modal.exportImage.svgBasemapDescription'} />
                <div className="button-list" id="export-image-modal__option_svg-basemap">
                  {SVG_BASEMAP_OPTIONS.map(op => (
                    <SelectionButton
                      key={op.id}
                      selected={svgBasemap === op.id}
                      onClick={() => onUpdateImageSetting({svgBasemap: op.id})}
                    >
                      <FormattedMessage id={op.label} />
                      {svgBasemap === op.id && <CheckMark />}
                    </SelectionButton>
                  ))}
                </div>
              </div>
              <div className="image-option-section">
                <div className="image-option-section-title">
                  <FormattedMessage id={'modal.exportImage.svgZipTitle'} />
                </div>
                <Switch
                  type="checkbox"
                  id="export-image-svg-zip"
                  checked={svgZip}
                  label={intl.formatMessage({id: 'modal.exportImage.svgZipAdd'})}
                  onChange={() => onUpdateImageSetting({svgZip: !svgZip})}
                />
                <StyledNote>
                  <FormattedMessage id={'modal.exportImage.svgZipDescription'} />
                </StyledNote>
              </div>
            </>
          ) : null}
          <div className="image-option-section">
            <div className="image-option-section-title">
              <FormattedMessage id={'modal.exportImage.ratioTitle'} />
            </div>
            <FormattedMessage id={'modal.exportImage.ratioDescription'} />
            <div className="button-list" id="export-image-modal__option_ratio">
              {EXPORT_IMG_RATIO_OPTIONS.filter(op => !op.hidden).map(op => (
                <SelectionButton
                  key={op.id}
                  selected={ratio === op.id}
                  onClick={() => onUpdateImageSetting({ratio: op.id})}
                >
                  <FormattedMessage id={op.label} />
                  {ratio === op.id && <CheckMark />}
                </SelectionButton>
              ))}
            </div>
          </div>
          <div className="image-option-section">
            <div className="image-option-section-title">
              <FormattedMessage id={'modal.exportImage.resolutionTitle'} />
            </div>
            <FormattedMessage id={'modal.exportImage.resolutionDescription'} />
            <div className="button-list" id="export-image-modal__option_resolution">
              {EXPORT_IMG_RESOLUTION_OPTIONS.map(op => (
                <SelectionButton
                  key={op.id}
                  selected={resolution === op.id}
                  onClick={() => op.available && onUpdateImageSetting({resolution: op.id})}
                >
                  {op.label}
                  {resolution === op.id && <CheckMark />}
                </SelectionButton>
              ))}
            </div>
          </div>
          <div className="image-option-section">
            <div className="image-option-section-title">
              <FormattedMessage id={'modal.exportImage.mapLegendTitle'} />
            </div>
            <Switch
              type="checkbox"
              id="add-map-legend"
              checked={legend}
              label={intl.formatMessage({id: 'modal.exportImage.mapLegendAdd'})}
              onChange={() => onUpdateImageSetting({legend: !legend})}
            />
          </div>
        </ImageOptionList>
        <ImagePreview exportImage={exportImage} />
      </StyledModalContent>
    );
  };

  return injectIntl(ExportImageModal);
};

export default ExportImageModalFactory;
