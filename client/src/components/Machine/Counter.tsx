import { darken, lighten } from 'polished';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { RootState } from '../../modules';
import putComma from '../../util/putComma';

interface CounterWrapperProps {
  isFilled: any;
}

const CounterWrapper = styled.div<CounterWrapperProps>`
  width: 95%;
  height: 4rem;
  padding: 1.2rem;
  text-align: right;
  font-size: 1.8rem;
  box-shadow: inset 0 0 4px 3px rgba(255, 255, 255, 0.2),
    -1px 1px 5px 2px rgba(24, 24, 24, 0.5);

  background-color: #181818;
  ${(props): any => {
    const point = props.theme.point;
    return props.isFilled
      ? css`
          // turn on
          color: ${point};
          text-shadow: 0 0 2px ${lighten(0.3, point)};
        `
      : css`
          // turn off
          color: ${darken(0.3, 'darkgray')};
        `;
  }}
`;

function Counter() {
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
  const coinInMachineWithComma = putComma(coinInMachine);
  return (
    <CounterWrapper isFilled={isFilled}>
      {coinInMachineWithComma} ₩
    </CounterWrapper>
  );
}

export default Counter;
