import { darken, lighten } from 'polished';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { RootState } from '../../modules';
import { takeCoin } from '../../modules/coin';

const CoinBox = styled.div`
  color: inherit;
  font-weight: inherit;
  font-size: inherit;

  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 5px;
  width: 100%;
  height: 100%;
  border: 0.5px solid rgba(255, 255, 255, 0.5);
  color: inherit;
  cursor: inherit;
  background-color: transparent;
  background-image: linear-gradient(
    13deg,
    transparent,
    rgba(128, 128, 128, 0.5) 50%
  );
`;

interface ChangeBoxWrapperProps {
  isFilled: any;
}

const ChangeBoxWrapper = styled.div<ChangeBoxWrapperProps>`
  overflow: hidden;
  width: 4.3rem;
  height: 4.3rem;
  ${(props): any => {
    const main = props.theme.main;
    const point = props.theme.point;
    return props.isFilled
      ? css`
          // turn on
          font-size: 1.1rem;
          cursor: pointer;
          border: 1px solid ${point};
          border-bottom: 4px solid ${point};
          color: rgba(255, 255, 255, 0.8);
          background-color: ${lighten(0.01, point)};
        `
      : css`
          // turn off
          font-size: 0.9rem;
          cursor: not-allowed;
          border: 1px solid ${darken(0.3, main)};
          border-bottom: 4px solid ${darken(0.4, main)};
          background-color: ${darken(0.5, main)};
          color: rgba(255, 255, 255, 0.2);
        `;
  }}
`;

function ChangeBox() {
  const dispatch = useDispatch();
  const coinInBox = useSelector((state: RootState) => state.coin.coinInBox);
  const [isFilled, setIsFilled] = useState(false);

  useEffect(() => {
    if (coinInBox > 0) {
      setIsFilled(true);
    } else {
      setIsFilled(false);
    }
  }, [coinInBox]);

  const handleChangeBox = () => {
    dispatch(takeCoin());
  };

  return (
    <div>
      <ChangeBoxWrapper isFilled={isFilled} onClick={handleChangeBox}>
        <CoinBox>{isFilled ? 'CLICK!' : 'COIN'}</CoinBox>
      </ChangeBoxWrapper>
    </div>
  );
}

export default ChangeBox;
