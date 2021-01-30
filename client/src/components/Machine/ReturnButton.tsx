import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';
import { RootState } from '../../modules';
import { popCoin } from '../../modules/coin';

interface ReturnButtonWrapperProps {
  isFilled: any;
}

const ReturnButtonWrapper = styled.div<ReturnButtonWrapperProps>`
  width: 4.3rem;
  height: 4.3rem;
  border-radius: 50%;
  border: 2.5px solid white;
  background-color: #0c0c0c;
  box-shadow: inset 0 -1px 0 3px ${darken(0.1, '#0c0c0c')},
    inset 0 8px ${lighten(0.25, '#0c0c0c')},
    -1px 1px 5px 2px rgba(24, 24, 24, 0.5);
  cursor: not-allowed;
  ${(props: any) =>
    props.isFilled &&
    css`
      cursor: pointer;
      background-color: #f39c12;
      box-shadow: inset 0 -1px 0 3px ${darken(0.1, '#f39c12')},
        inset 0 8px ${lighten(0.18, '#f39c12')},
        -1px 1px 5px 2px rgba(24, 24, 24, 0.5);
    `}
`;

function ReturnButton() {
  const dispatch = useDispatch();
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
  const handleLever = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    dispatch(popCoin());
  };
  return (
    <ReturnButtonWrapper
      onClick={handleLever}
      isFilled={isFilled}
    ></ReturnButtonWrapper>
  );
}

export default ReturnButton;
