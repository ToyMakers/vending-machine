import React from 'react';
import { useDrag } from 'react-dnd';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { ItemTypes } from '../../constants/itemType';
import { pushCoin } from '../../modules/coin';

const CoinWrapper = styled.button`
  display: flex;
  cursor: move;
  justify-content: center;
  align-items: center;
  background-color: #f3f3f3;
  border-top: 5px solid #ffffff;
  border-right: 5px solid #c8c8c8;
  border-left: 5px solid #ffffff;
  border-bottom: 5px solid #9b9b9b;
  border-style: inset;
  border-radius: 100%;
  color: #adadad;
  font-weight: 700;
  width: 5rem;
  height: 5rem;
  padding: 1rem;
  transform: translate(0, 0);
`;

interface CoinProps {
  moneyValue: number;
}

function Coin({ moneyValue }: CoinProps) {
  const dispatch = useDispatch();

  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.COIN },
    begin: (monitor) => {
      console.log(`${moneyValue} dragging begin`);
    },
    end: (item, monitor) => {
      console.log(`${moneyValue} dragging end`);
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
    <CoinWrapper ref={drag}>
      <span>{moneyValue}</span>
    </CoinWrapper>
  );
}

export default Coin;
