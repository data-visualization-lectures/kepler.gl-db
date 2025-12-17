// SPDX-License-Identifier: MIT
// Copyright contributors to the kepler.gl project

import React, { Component } from 'react';
import { Icons } from '@kepler.gl/components';
import PropTypes from 'prop-types';

class DatavizIcon extends Component {
    static propTypes = {
        /** Set the height of the icon, ex. '16px' */
        height: PropTypes.string,
        colors: PropTypes.arrayOf(PropTypes.string)
    };

    static defaultProps = {
        height: '16px',
        predefinedClassName: 'data-ex-icons-dataviz',
        totalColor: 1
    };

    render() {
        return (
            <Icons.IconWrapper {...this.props} viewBox={'0 0 24 24'} colors={['#2E7CF6']}>
                <path
                    d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"
                />
            </Icons.IconWrapper>
        );
    }
}

export default DatavizIcon;
