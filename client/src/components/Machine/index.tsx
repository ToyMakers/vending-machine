import React from 'react';
import styled from 'styled-components';
import LogoImg from '../../styles/img/logo.png';
import Shelf from './Shelf';
import Counter from './Counter';
import Slot from './Slot';
import Door from './Door';
import Coolor from './Coolor';
import ReturnButton from './ReturnButton';

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
  background-color: transparent;
  flex: 0.55;
  width: 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-height: 95%;
  }
`;

const PaymentWrapper = styled.div`
  flex: 0.4;
  /* background-color: blue; */
  display: flex;
  flex-direction: column;
  padding: 0rem 0rem 0rem 2rem;
`;

const SlotLeverWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.3rem;
  flex: 1;
`;

function index() {
  return (
    <MachineWrapper>
      <TopArea>
        <LogoArea>
          <img src={LogoImg} />
        </LogoArea>
        <Shelf drinkKeyArr={['coke', 'coke', 'coke', 'coke']} />
        <ShelfBorder />
        <Shelf drinkKeyArr={['sprite', 'sprite', 'sprite', 'sprite']} />
        <ShelfBorder />
        <Shelf drinkKeyArr={['pepper', 'pepper', 'pepper', 'pepper']} />
        <ShelfBorder />
      </TopArea>
      <MiddleArea>
        <AdvertisementWrapper>
          {/* <h5 style={{ fontSize: '2rem' }}>광고</h5> */}
          <img src={LogoImg} />
        </AdvertisementWrapper>
        <PaymentWrapper>
          <Counter />
          <SlotLeverWrapper>
            <Slot />
            <ReturnButton />
          </SlotLeverWrapper>
        </PaymentWrapper>
      </MiddleArea>
      <Door />
      <Coolor />
    </MachineWrapper>
  );
}

export default index;
