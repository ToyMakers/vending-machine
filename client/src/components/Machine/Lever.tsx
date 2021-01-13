import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../modules';
import { popCoin } from '../../modules/coin';

const LeverWrapper = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;

  background-color: darkgray;
`;

function Lever() {
  const dispatch = useDispatch();
  const handleLever = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    dispatch(popCoin());
  };
  return <LeverWrapper onClick={handleLever}>반환</LeverWrapper>;
}

export default Lever;
