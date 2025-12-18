// SPDX-License-Identifier: MIT
// Copyright contributors to the kepler.gl project

import React, { useEffect } from 'react';
import { OverwriteMapModalFactory, useCloudListProvider } from '@kepler.gl/components';

export function CustomOverwriteMapModalFactory(...deps) {
    const DefaultModal = OverwriteMapModalFactory(...deps);

    const CustomModal = (props) => {
        const { mapSaved } = props;
        const { provider, setProvider, cloudProviders } = useCloudListProvider();

        // DEBUG LOGS
        console.log('OverwriteMapModal (Custom): Render', { provider, cloudProviders, mapSaved, title: props.title });

        useEffect(() => {
            console.log('OverwriteMapModal (Custom): useEffect trigger', {
                hasProvider: !!provider,
                providersCount: cloudProviders ? cloudProviders.length : 0,
                mapSaved
            });

            if (!provider && cloudProviders && cloudProviders.length > 0) {
                // If mapSaved is available, try to find matching provider
                let matchedProvider = null;
                if (mapSaved) {
                    matchedProvider = cloudProviders.find(p => p.displayName === mapSaved || p.name === mapSaved);
                }

                // If no match found (or mapSaved is empty), fallback to the first provider (Dataviz)
                // This ensures the button is always enabled.
                if (!matchedProvider) {
                    console.log('OverwriteMapModal (Custom): Fallback to first provider', cloudProviders[0]);
                    matchedProvider = cloudProviders[0];
                }

                if (matchedProvider) {
                    console.log('OverwriteMapModal (Custom): calling setProvider', matchedProvider);
                    setProvider(matchedProvider);
                }
            } else {
                console.log('OverwriteMapModal (Custom): useEffect skipped', {
                    reason: provider ? 'Provider already set' : 'No cloudProviders'
                });
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
