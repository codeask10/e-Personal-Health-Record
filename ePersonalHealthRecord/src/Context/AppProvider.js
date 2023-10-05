import React from 'react';
import { HomeProvider } from './path-to-HomeContext';
import { PrescriptionProvider } from './path-to-PrescriptionContext';
import { CBCProvider } from './path-to-CBCContext';
import { UrineProvider } from './path-to-UrineContext';
// ... import other context providers

const AppProvider = ({ children }) => {
  return (
    <HomeProvider>
      <PrescriptionProvider>
        <CBCProvider>
          <UrineProvider>
            {/* Wrap other providers as needed */}
            {children}
          </UrineProvider>
        </CBCProvider>
      </PrescriptionProvider>
    </HomeProvider>
  );
};

export default AppProvider;
