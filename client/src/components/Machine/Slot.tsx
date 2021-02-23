import { darken, lighten } from 'polished';
import React from 'react';
import { useDrop } from 'react-dnd';
import { useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { ItemTypes } from '../../constants/itemType';
import { RootState } from '../../modules';

interface SlotWrapperProps {
  isCoinDragging: any;
}

const SlotWrapper = styled.div<SlotWrapperProps>`
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;
  border: 2px solid #ffffff;

  background-color: gray;
  box-shadow: inset 0 0 3px 2px #181818, -1px 1px 5px 2px rgba(24, 24, 24, 0.5);

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

  background-image: linear-gradient(
    45deg,
    #5a5a5a 45%,
    rgba(255, 255, 255, 0.3),
    transparent 55%
  );

  ${(props): any => {
    return (
      props.isCoinDragging &&
      css`
        width: 5.2rem;
        height: 5.2rem;
      `
    );
  }}

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
  const isCoinDragging = useSelector(
    (state: RootState) => state.coin.isCoinDragging
  );
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.COIN,
    drop: () => {
      console.log('coin ++');
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return <SlotWrapper ref={drop} isCoinDragging={isCoinDragging}></SlotWrapper>;
}

export default Slot;
