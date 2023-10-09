import React from 'react';
import HomeProvider from './Home/HomeState';
import PrescriptionProvider from './prescription/PrescriptionState'
import CBCProvider from './CBC/CBCState';
import LiverFTProvider from './LiverFunction/LiverFTState';
import UrineTestProvider from './UrineTest/UrineTestState';
import OtherTestProvider from './OthterTest/OtherTestState';
import UserProfileProvider from './UserProfile/UserProfileState';
import LoginProvider from './Login/LoginState';
// ... import other context providers

const AppProvider = ({ children }) => {
  return (
    <HomeProvider>
      <PrescriptionProvider>
        <CBCProvider>
          <UrineTestProvider>
            <LiverFTProvider>
              <OtherTestProvider>
                <UserProfileProvider>
                  <LoginProvider>
                    {/* Wrap other providers as needed */}
                    {children}
                  </LoginProvider>
                </UserProfileProvider>
              </OtherTestProvider>
            </LiverFTProvider>
          </UrineTestProvider>
        </CBCProvider>
      </PrescriptionProvider>
    </HomeProvider>
  );
};

export default AppProvider;
