import React from 'react';
import styled from 'styled-components';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import Machine from '../components/Machine';
import Wallet from '../components/Wallet';

const MainPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  background-color: ${(props) => props.theme.background};
`;

const MachineArea = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const WalletArea = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

function MainPage() {
  return (
    <>
      <Header />
      <MainPageWrapper>
        <MachineArea>
          <Machine />
        </MachineArea>
        <div style={{ margin: '0rem 2rem' }} />
        <WalletArea>
          <Wallet />
        </WalletArea>
      </MainPageWrapper>
      <Footer />
    </>
  );
}

export default MainPage;
