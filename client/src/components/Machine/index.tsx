import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import ToyMakersLogo from '../../styles/img/logo.png';
import ReactLogo from '../../styles/img/logo192.png';
import Shelf from './Shelf';
import Counter from './Counter';
import Slot from './Slot';
import Door from './Door';
import Coolor from './Coolor';
import ReturnButton from './ReturnButton';
import ChangeBox from './ChangeBox';
import { darken } from 'polished';
import { useSelector } from 'react-redux';
import { RootState } from '../../modules';

const MachineWrapper = styled.div`
  position: relative;
  width: 42rem;
  height: 65rem;
  // color
  ${(props) => {
    const selected = props.theme.main;
    return css`
      background-color: ${selected};
      box-shadow: inset 2px -2px 15px 5px ${darken(0.2, selected)};
      &::before,
      ::after {
        background-color: ${darken(0.2, selected)};
      }
    `;
  }}
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
  justify-content: space-between;
  height: 10.5rem;
`;

interface AdvertisementWrapperProps {
  isFilled: any;
}

const AdvertisementWrapper = styled.div<AdvertisementWrapperProps>`
  background-color: transparent;
  flex: 0.5;
  width: 0rem;
  display: flex;
  ${(props): any => {
    return (
      !props.isFilled &&
      css`
        img {
          filter: grayscale(80%);
        }
      `
    );
  }}
  img {
    margin: 5px 0px 0px 20%;
    max-height: 70%;
    padding: 5px;
    background-color: black;
    border-radius: 15%;
  }
`;

const PaymentWrapper = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  padding: 0rem 2rem 0rem 2rem;
`;

const SlotLeverWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.3rem;
  flex: 1;
`;

function index() {
  const coinInMachine = useSelector(
    (state: RootState) => state.coin.coinInMachine
  );
  const [isFilled, setIsFilled] = useState(false);
  useEffect(() => {
    if (coinInMachine > 0) {
      setIsFilled(true);
    } else {
      setIsFilled(false);
    }
  }, [coinInMachine]);

  return (
    <MachineWrapper>
      <TopArea>
        <LogoArea>
          <img src={ToyMakersLogo} />
        </LogoArea>
        <Shelf drinkKeyArr={['coke', 'coke', 'coke', 'coke']} />
        <ShelfBorder />
        <Shelf drinkKeyArr={['sprite', 'sprite', 'sprite', 'sprite']} />
        <ShelfBorder />
        <Shelf drinkKeyArr={['pepper', 'pepper', 'pepper', 'pepper']} />
        <ShelfBorder />
      </TopArea>
      <MiddleArea>
        <AdvertisementWrapper isFilled={isFilled}>
          <img src={ReactLogo} />
        </AdvertisementWrapper>
        <PaymentWrapper>
          <Counter />
          <SlotLeverWrapper>
            <Slot />
            <ReturnButton />
            <ChangeBox />
          </SlotLeverWrapper>
        </PaymentWrapper>
      </MiddleArea>
      <Door />
      <Coolor />
    </MachineWrapper>
  );
}

export default index;
