// SPDX-License-Identifier: MIT
// Copyright contributors to the kepler.gl project

import React, {useCallback, useLayoutEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import classnames from 'classnames';
import {FormattedMessage} from 'react-intl';
import Switch from '../../common/switch';
import InfoHelperFactory from '../../common/info-helper';
import {ArrowDown, ArrowUp} from '../../common/icons';
import {shouldForwardProp} from '../../common/styled-components';
import {Layer} from '@kepler.gl/layers';
import {LayerVisConfig} from '@kepler.gl/types';

export type LayerConfigGroupLabelProps = {
  label?: string;
  description?: string;
  collapsed?: boolean;
};

export type LayerConfigGroupProps = {
  layer?: Layer;
  label: string;
  property?: string;
  description?: string;
  collapsible?: boolean;
  expanded?: boolean;
  disabled?: boolean;
  onChange?: (newVisConfig: Partial<LayerVisConfig>) => void;
  IconComponent?: React.ElementType;
  children?: React.ReactNode;
};

export const StyledLayerConfigGroupAction = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.textColor};
`;

export const ConfigGroupCollapsibleContent = styled.div.attrs({
  className: 'layer-config-group__content__collapsible'
})`
  transition: max-height 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  height: max-content;
  max-height: 1200px;
  overflow: auto;
`;

export const ConfigGroupCollapsibleHeader = styled.div.attrs({
  className: 'layer-config-group__header__collapsible'
})`
  overflow: visible;
  overflow: hidden;
  max-height: 0;
`;

export const StyledLayerConfigGroup = styled.div`
  padding-left: ${props => props.theme.layerConfigGroupPaddingLeft}px;
  margin-bottom: ${props => props.theme.layerConfigGroupMarginBottom}px;

  &.disabled {
    opacity: 0.3;
    pointer-events: none;
  }
  &.collapsed {
    .layer-config-group__header__collapsible {
      overflow: visible;
      max-height: 600px;
    }
    .layer-config-group__content {
      .layer-config-group__content__collapsible {
        overflow: hidden;
        max-height: 0;
      }
    }
  }
`;

interface StyledConfigGroupHeaderProps {
  collapsible?: boolean;
}

// Same 0.3s window as the collapsible max-height. Custom ease-out so the
// chevron starts immediately instead of the weak built-in ease-out.
const CHEVRON_TRANSITION = 'transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)';

export const StyledConfigGroupChevron = styled.span.withConfig({shouldForwardProp}).attrs({
  className: 'layer-config-group__chevron'
})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  flex-shrink: 0;
  transform: rotate(0deg);
  transition: ${CHEVRON_TRANSITION};

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

function prefersReducedMotion() {
  return (
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

/**
 * Collapsed shows ArrowUp. Expanded shows ArrowDown.
 * The glyph is swapped under a 180° rotation so the turn and the content
 * max-height finish together, and the resting icon still matches the state.
 */
const LayerConfigGroupChevron: React.FC<{
  collapsed: boolean;
  IconComponent?: React.ElementType;
}> = ({collapsed, IconComponent}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const hasMounted = useRef(false);
  const Glyph = IconComponent ?? (collapsed ? ArrowUp : ArrowDown);

  useLayoutEffect(() => {
    const node = ref.current;
    if (!node || IconComponent) {
      return undefined;
    }

    if (!hasMounted.current) {
      hasMounted.current = true;
      return undefined;
    }

    if (prefersReducedMotion()) {
      node.style.transition = 'none';
      node.style.transform = '';
      return undefined;
    }

    // Incoming glyph already points the right way. Start it 180° off so the
    // turn reads as up → down (or the reverse) instead of a hard swap.
    // Reading layout flushes the start angle so the CSS transition can run.
    const fromDeg = collapsed ? 180 : -180;
    node.style.transition = 'none';
    node.style.transform = `rotate(${fromDeg}deg)`;
    void node.offsetWidth;
    node.style.transition = '';
    node.style.transform = '';
    return undefined;
  }, [collapsed, IconComponent]);

  return (
    <StyledConfigGroupChevron ref={ref}>
      <Glyph height="18px" />
    </StyledConfigGroupChevron>
  );
};

export const StyledConfigGroupHeader = styled.div.withConfig({shouldForwardProp}).attrs({
  className: 'layer-config-group__header'
})<StyledConfigGroupHeaderProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
  cursor: default;

  &:hover {
    ${props => props.collapsible && 'cursor: pointer;'}
    .layer-config-group__label {
      color: ${props => props.theme.textColorHl};
    }

    .layer-config-group__action {
      color: ${props => props.theme.textColorHl};
    }
  }
`;

const ConfigGroupContent = styled.div`
  &.disabled {
    opacity: 0.3;
    pointer-events: none;
    * {
      pointer-events: none;
    }
  }
`;

LayerConfigGroupLabelFactory.deps = [InfoHelperFactory];

export function LayerConfigGroupLabelFactory(InfoHelper: ReturnType<typeof InfoHelperFactory>) {
  const StyledLayerConfigGroupLabel = styled.div`
    border-left: ${props => props.theme.layerConfigGroupLabelBorderLeft} solid
      ${props => props.theme.labelColor};
    line-height: 12px;
    margin-left: ${props => props.theme.layerConfigGroupLabelMargin};
    padding-left: ${props => props.theme.layerConfigGroupLabelPadding};

    display: flex;
    align-items: center;

    span {
      color: ${props => props.theme.textColor};
      font-weight: 500;
      letter-spacing: 0.2px;
      text-transform: capitalize;
      margin-left: ${props => props.theme.layerConfigGroupLabelLabelMargin};
      font-size: ${props => props.theme.layerConfigGroupLabelLabelFontSize};
    }
  `;

  const LayerConfigGroupLabel: React.FC<LayerConfigGroupLabelProps> = ({label, description}) => (
    <StyledLayerConfigGroupLabel className="layer-config-group__label">
      <span>
        <FormattedMessage id={label || 'misc.empty'} defaultMessage={label} />
      </span>
      {description && <InfoHelper description={description} id={label} />}
    </StyledLayerConfigGroupLabel>
  );

  return LayerConfigGroupLabel;
}

LayerConfigGroupFactory.deps = [LayerConfigGroupLabelFactory];

function nop() {
  return;
}
function LayerConfigGroupFactory(
  LayerConfigGroupLabel: ReturnType<typeof LayerConfigGroupLabelFactory>
) {
  const LayerConfigGroup: React.FC<LayerConfigGroupProps> = ({
    label,
    children,
    property,
    layer,
    onChange = nop,
    collapsible = false,
    description = '',
    disabled = false,
    expanded = false,
    IconComponent
  }) => {
    const [collapsed, toggleCollapsed] = useState(!expanded);
    const onToggleCollapsed = useCallback(() => {
      if (collapsible) {
        toggleCollapsed(value => !value);
      }
    }, [collapsible]);

    return (
      <StyledLayerConfigGroup className={classnames('layer-config-group', {collapsed, disabled})}>
        <StyledConfigGroupHeader
          onClick={onToggleCollapsed}
          collapsible={collapsible}
          aria-expanded={collapsible ? !collapsed : undefined}
        >
          <LayerConfigGroupLabel label={label} description={description} collapsed={collapsed} />
          <StyledLayerConfigGroupAction className="layer-config-group__action">
            {property ? (
              <Switch
                checked={layer?.config.visConfig[property]}
                id={`${layer?.id}-${property}`}
                onChange={() => onChange?.({[property]: !layer?.config.visConfig[property]})}
              />
            ) : null}
            {collapsible ? (
              <LayerConfigGroupChevron collapsed={collapsed} IconComponent={IconComponent} />
            ) : null}
          </StyledLayerConfigGroupAction>
        </StyledConfigGroupHeader>
        <ConfigGroupContent
          className={classnames('layer-config-group__content', {
            disabled: property && !layer?.config.visConfig[property]
          })}
        >
          {children}
        </ConfigGroupContent>
      </StyledLayerConfigGroup>
    );
  };

  return LayerConfigGroup;
}

export default LayerConfigGroupFactory;
