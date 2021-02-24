import React from 'react';
import { useDrag, DragPreviewImage } from 'react-dnd';
import TakeMoney from '../../assets/img/take_money.png';
import { useDispatch } from 'react-redux';
import styled, { css } from 'styled-components';
import { ItemTypes } from '../../constants/itemType';
import { pushCoin, toggleCoinDragging } from '../../modules/coin';
import putComma from '../../util/putComma';
import { respondTo } from '../../styles/mixin';

interface CoinWrapperProps {
  isBig: any;
  ref?: any;
}

const CoinWrapper = styled.button<CoinWrapperProps>`
  cursor: move;
  background: linear-gradient(143deg, #b6b6b6, #ffffff 50%, #929292);
  border-radius: 100%;
  width: 6.2rem;
  height: 6.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  ${(props): any => {
    return (
      props.isBig &&
      css`
        width: 6.8rem;
        height: 6.8rem;
        font-size: 2rem;
      `
    );
  }}
  transform: translate(0, 0);
`;

const CoinInner = styled.div`
  border: 2.5px solid #a09f9f;
  border-radius: 100%;
  width: 95%;
  height: 95%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CoinText = styled.span<CoinWrapperProps>`
  font-size: 1.4rem;
  font-weight: 700;
  width: 93%;
  height: 93%;
  color: #a09f9f;
  border: 1.5px solid #929292;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface CoinProps {
  moneyValue: number;
  isBig: boolean;
}

function Coin({ moneyValue, isBig }: CoinProps) {
  const dispatch = useDispatch();
  const moneyValueComma = putComma(moneyValue);
  const [{ isDragging }, drag, preview] = useDrag({
    item: { type: ItemTypes.COIN },
    begin: (monitor) => {
      console.log(`${moneyValueComma} dragging begin`);
      dispatch(toggleCoinDragging());
    },
    end: (item, monitor) => {
      console.log(`${moneyValueComma} dragging end`);
      dispatch(toggleCoinDragging());
      if (!monitor.didDrop()) {
        return;
      }
      dispatch(pushCoin(moneyValue));
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <>
      <DragPreviewImage src={TakeMoney} connect={preview} />
      <CoinWrapper ref={drag} isBig={isBig}>
        <CoinInner>
          <CoinText isBig={isBig}>{moneyValueComma}</CoinText>
        </CoinInner>
      </CoinWrapper>
    </>
  );
}

Coin.defaultProps = {
  isBig: false,
  moneyValue: undefined,
};

export default Coin;
