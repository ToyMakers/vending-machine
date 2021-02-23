import React from 'react';
import styled, { css } from 'styled-components';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import Inventory from '../components/Inventory';
import Machine from '../components/Machine';
import Wallet from '../components/Wallet';
import { respondTo } from '../styles/mixin';

const MainPageWrapper = styled.div`
  ${respondTo.desktop`
    flex-direction: row;
    `}
  overflow: scroll;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 87vh;
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

const RespondMargin = styled.div`
  margin: 0rem 2rem;
  ${respondTo.desktop`
    margin: 2rem 0rem;
  `}
`;

const MachineArea = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const UserArea = styled.div`
  ${respondTo.desktop`
    flex-direction: column;
    width: auto;
  `}
  max-width: 85vw;
  width: 100%;
  padding: 3% 0rem;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
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
          <RespondMargin />
          <Inventory />
        </UserArea>
      </MainPageWrapper>
      <Footer />
    </>
  );
}

export default MainPage;
