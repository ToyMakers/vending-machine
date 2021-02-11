import React from 'react';
import { useDrag } from 'react-dnd';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { ItemTypes } from '../../constants/itemType';
import { pushCoin } from '../../modules/coin';
import putComma from '../../util/putComma';

interface CoinWrapperProps {
  isBig: any;
  ref?: any;
}

const CoinWrapper = styled.button<CoinWrapperProps>`
  cursor: move;
  background: linear-gradient(143deg, #b6b6b6, #ffffff 50%, #929292);
  border-radius: 100%;
  width: 5.2rem;
  height: 5.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
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
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.COIN },
    begin: (monitor) => {
      console.log(`${moneyValueComma} dragging begin`);
    },
    end: (item, monitor) => {
      console.log(`${moneyValueComma} dragging end`);
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
    <CoinWrapper ref={drag} isBig={isBig}>
      <CoinInner>
        <CoinText isBig={isBig}>{moneyValueComma}</CoinText>
      </CoinInner>
    </CoinWrapper>
  );
}

Coin.defaultProps = {
  isBig: false,
  moneyValue: undefined,
};

export default Coin;
