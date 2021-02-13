import React from 'react';
import styled, { css } from 'styled-components';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import Inventory from '../components/Inventory';
import Machine from '../components/Machine';
import Wallet from '../components/Wallet';
import Kick from '../components/Kick';

const MainPageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  background-color: ${(props) => props.theme.mainBackground};
  ${(props: any): any => {
    const mainBackground1 = '#2c2c54';
    const mainBackground2 = '#40407a';
    const mainBackground3 = '#474787';
    const mainBackground4 = '#706fd3';
    return css`
      background-image: linear-gradient(
        180deg,
        ${mainBackground1} 40%,
        ${mainBackground2},
        ${mainBackground3},
        ${mainBackground4}
      );
    `;
  }}
`;

const MachineArea = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const UserArea = styled.div`
  padding: 1.8rem 0rem;
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
        <UserArea>
          <Wallet />
          <div style={{ margin: '2rem 0rem' }} />
          <Inventory />
        </UserArea>
      </MainPageWrapper>
      <Footer />
    </>
  );
}

export default MainPage;
