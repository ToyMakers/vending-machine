import React from 'react';
import { useDrag, DragPreviewImage } from 'react-dnd';
import KickMachine from '../../assets/img/messi.png';
import styled from 'styled-components';
import NewBalance from '../../assets/img/new_balance.png';
import { ItemTypes } from '../../constants/itemType';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../modules';
import { buyDrink } from '../../modules/drink';

const ShoesBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: inherit;
  width: 1rem;
  position: absolute;
  left: 8rem;
  cursor: move;
  img {
    max-height: 90%;
    transform: translate(0, 0);
  }
`;

function Kick() {
  const drinkStock = useSelector((state: RootState) => state.drink.drinkStock);
  const dispatch = useDispatch();

  const kickMachine = () => {
    let cnt = 0;
    for (const drinkKey in drinkStock) {
      const drinkNum = drinkStock[drinkKey];

      for (let i = 0; i < drinkNum; i++) {
        cnt++;
        setTimeout(() => {
          dispatch({ delayedAction: buyDrink(drinkKey), isDelay: true });
        }, 200 * cnt);
      }
    }
  };
  const [{ isDragging }, drag, preview] = useDrag({
    item: { type: ItemTypes.KICK },
    begin: (monitor) => {
      console.log(`dragging begin`);
    },
    end: (item, monitor) => {
      if (!monitor.didDrop()) {
        return;
      }
      kickMachine();
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <ShoesBox>
      <DragPreviewImage src={KickMachine} connect={preview} />
      {<img src={NewBalance} ref={drag} />}
    </ShoesBox>
  );
}

export default Kick;
