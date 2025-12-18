// SPDX-License-Identifier: MIT
// Copyright contributors to the kepler.gl project

import React, { useEffect } from 'react';
import { OverwriteMapModalFactory, useCloudListProvider } from '@kepler.gl/components';

export function CustomOverwriteMapModalFactory(...deps) {
    const DefaultModal = OverwriteMapModalFactory(...deps);

    const CustomModal = (props) => {
        const { mapSaved } = props;
        const { provider, setProvider, cloudProviders } = useCloudListProvider();

        useEffect(() => {
            if (!provider && cloudProviders && cloudProviders.length > 0) {
                // If mapSaved is available, try to find matching provider
                let matchedProvider = null;
                if (mapSaved) {
                    matchedProvider = cloudProviders.find(p => p.displayName === mapSaved || p.name === mapSaved);
                }

                // If only one provider exists, use it as fallback
                if (!matchedProvider && cloudProviders.length === 1) {
                    matchedProvider = cloudProviders[0];
                }

                if (matchedProvider) {
                    setProvider(matchedProvider);
                }
            }
        }, [provider, cloudProviders, mapSaved, setProvider]);

        // Customize the title
        const newProps = {
            ...props,
            title: '既存プロジェクトファイルを上書きしますか？'
        };

        return <DefaultModal {...newProps} />;
    };
    return CustomModal;
}

// Preserve dependencies
CustomOverwriteMapModalFactory.deps = OverwriteMapModalFactory.deps;

export function replaceOverwriteMapModal() {
    return [OverwriteMapModalFactory, CustomOverwriteMapModalFactory];
}
