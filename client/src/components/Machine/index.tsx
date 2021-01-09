import React from 'react';
import styled from 'styled-components';
import LogoImg from '../../styles/img/logo.png';
import * as canData from '../../constants/canData';
import Shelf from './Shelf';
import Counter from './Counter';
import Slot from './Slot';
import Door from './Door';
import Coolor from './Coolor';

const MachineWrapper = styled.div`
  position: relative;
  width: 42rem;
  height: 65rem;
  background-color: #1c9d4a;
  box-shadow: inset 2px -2px 15px 5px #096b2b;
  padding: 1.8rem;
  display: flex;
  flex-direction: column;
  &::before {
    left: 5px;
  }
  &::after {
    right: 5px;
  }
  &::before,
  ::after {
    content: '';
    width: 50px;
    height: 5px;
    position: absolute;
    top: 100%;
    background-color: #002f11;
  }
`;

const LogoArea = styled.div`
  padding: 0.1rem;
  position: absolute;
  width: 3.2rem;
  height: 3.2rem;
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const TopArea = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem 0rem;
`;

const ShelfBorder = styled.div`
  width: 100%;
  height: 2rem;
  background-color: #f3efef;
  box-shadow: inset 2px 2px 4px #ddd8d8;
`;

const MiddleArea = styled.div`
  display: flex;
  height: 10.5rem;
`;

const AdvertisementWrapper = styled.div`
  background-color: lightgray;
  flex: 0.6;
`;

const PaymentWrapper = styled.div`
  flex: 0.4;
  /* background-color: blue; */
  display: flex;
  flex-direction: column;
  padding: 0rem 0rem 0rem 2rem;
`;

function index() {
  return (
    <MachineWrapper>
      <TopArea>
        <LogoArea>
          <img src={LogoImg} />
        </LogoArea>
        <Shelf CanArr={[canData.coke, canData.coke, canData.coke]} />
        <ShelfBorder />
        <Shelf CanArr={[canData.sprite, canData.sprite, canData.sprite]} />
        <ShelfBorder />
        <Shelf CanArr={[canData.pepper, canData.pepper, canData.pepper]} />
        <ShelfBorder />
      </TopArea>
      <MiddleArea>
        <AdvertisementWrapper>
          <h5 style={{ fontSize: '2rem' }}>광고</h5>
        </AdvertisementWrapper>
        <PaymentWrapper>
          <Counter />
          <div
            style={{
              marginTop: '1.3rem',
              flex: 1,
              justifyContent: 'space-between',
            }}
          >
            <Slot />
          </div>
        </PaymentWrapper>
      </MiddleArea>
      <Door />
      <Coolor />
    </MachineWrapper>
  );
}

export default index;
