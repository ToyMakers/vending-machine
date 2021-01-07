import React from 'react';
import styled from 'styled-components';
import LogoImg from '../../styles/img/logo.png';
import * as canData from '../../constants/canData';
import Shelf from './Shelf';

const MachineWrapper = styled.div`
  width: 42rem;
  height: 65rem;
  background-color: #1c9d4a;
  box-shadow: inset 2px -2px 15px 5px #096b2b;
  padding: 1.8rem;
  display: flex;
  flex-direction: column;
`;

const LogoArea = styled.div`
  padding: 0.1rem;
  position: absolute;
  background-color: white;
  width: 3.2rem;
  height: 3.2rem;
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const ShelfWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem 0rem;
`;

const ShelfBorder = styled.div`
  width: 100%;
  height: 2rem;
  background-color: #f7f3f3;
`;

function index() {
  return (
    <MachineWrapper>
      <ShelfWrapper>
        <LogoArea>
          <img src={LogoImg} />
        </LogoArea>
        <Shelf CanArr={[canData.coke, canData.coke, canData.coke]} />
        <ShelfBorder></ShelfBorder>
        <Shelf CanArr={[canData.sprite, canData.sprite, canData.sprite]} />
        <ShelfBorder></ShelfBorder>
        <Shelf CanArr={[canData.pepper, canData.pepper, canData.pepper]} />
        <ShelfBorder></ShelfBorder>
      </ShelfWrapper>
    </MachineWrapper>
  );
}

export default index;
