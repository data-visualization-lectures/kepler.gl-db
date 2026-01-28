// SPDX-License-Identifier: MIT
// Copyright contributors to the kepler.gl project

import { PanelHeaderFactory, Icons } from '@kepler.gl/components';
import { USER_GUIDE_DOC } from '@kepler.gl/constants';

export function CustomPanelHeaderFactory(...deps) {
  const PanelHeader = PanelHeaderFactory(...deps);
  const defaultActionItems = PanelHeader.defaultProps.actionItems;
  PanelHeader.defaultProps = {
    ...PanelHeader.defaultProps,
    actionItems: [
      {
        ...defaultActionItems.find(item => item.id === 'save'),
        label: null,
        tooltip: 'Share'
      }
    ]
  };
  return PanelHeader;
}

CustomPanelHeaderFactory.deps = PanelHeaderFactory.deps;

export function replacePanelHeader() {
  return [PanelHeaderFactory, CustomPanelHeaderFactory];
}
