import React from 'react';
import { useDrop } from 'react-dnd';
import styled from 'styled-components';
import { ItemTypes } from '../../constants/itemType';

const SlotWrapper = styled.div`
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;
  border: 2px solid #ffffff;
  box-shadow: inset 0 0 3px 2px #181818, -1px 1px 5px 2px rgba(24, 24, 24, 0.5);
  background-color: gray;
  background-image: linear-gradient(
      75deg,
      #676767,
      #5a5a5a 45%,
      transparent 55%
    ),
    linear-gradient(
      45deg,
      #5a5a5a 45%,
      rgba(255, 255, 255, 0.3),
      transparent 55%
    );
  position: relative;
  &::after {
    content: '';
    width: 28px;
    height: 4px;
    background-color: #181818;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
`;

function Slot() {
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.COIN,
    drop: () => {
      console.log('coin ++');
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return <SlotWrapper ref={drop}></SlotWrapper>;
}

export default Slot;
