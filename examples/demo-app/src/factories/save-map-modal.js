import { SaveMapModalFactory, useCloudListProvider } from '@kepler.gl/components';
import React, { useEffect } from 'react';

export const CustomSaveMapModalFactory = (...deps) => {
    const SaveMapModal = SaveMapModalFactory(...deps);

    const CustomSaveMapModal = (props) => {
        const { provider, cloudProviders, setProvider } = useCloudListProvider();

        // Auto-select provider on mount if not set
        // This addresses the issue where the button is disabled because no provider is selected
        useEffect(() => {
            if (!provider && cloudProviders && cloudProviders.length > 0) {
                console.log('[CustomSaveMapModal] Auto-selecting default provider:', cloudProviders[0].name);
                setProvider(cloudProviders[0]);
            }
        }, [provider, cloudProviders, setProvider]);

        return <SaveMapModal {...props} />;
    };

    return CustomSaveMapModal;
};

// Return the properly paired factories for replacement
export function replaceSaveMapModal() {
    return [SaveMapModalFactory, CustomSaveMapModalFactory];
}
