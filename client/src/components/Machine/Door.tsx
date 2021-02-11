import { darken, lighten } from 'polished';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { RootState } from '../../modules';
import { getDrink } from '../../modules/drink';

interface DoorWrapperProps {
  isFilled: any;
}

const DoorArea = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 2rem;
`;

const DoorWrapper = styled.div<DoorWrapperProps>`
  overflow: hidden;
  width: 80%;
  height: 80px;

  ${(props): any => {
    const main = props.theme.main;
    const point = props.theme.point;
    return props.isFilled
      ? css`
          // turn on
          font-size: 1.7rem;
          cursor: pointer;
          font-weight: 800;
          border: 1px solid ${point};
          border-bottom: 4px solid ${point};
          color: rgba(255, 255, 255, 0.8);
          background-color: ${lighten(0.01, point)};
        `
      : css`
          // turn off
          font-size: 1.5rem;
          cursor: not-allowed;
          border: 3px solid ${darken(0.3, main)};
          border-bottom: 8px solid ${darken(0.4, main)};
          background-color: ${darken(0.5, main)};
          color: rgba(255, 255, 255, 0.2);
        `;
  }}
`;

const ExitBox = styled.div`
  color: inherit;
  font-weight: inherit;
  font-size: inherit;

  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 5px;
  width: 100%;
  height: 100%;
  border: 1px solid rgba(255, 255, 255, 0.5);
  background-color: transparent;
  background-image: linear-gradient(
    13deg,
    transparent,
    rgba(128, 128, 128, 0.5) 50%
  );
`;

function Door() {
  const exitBox = useSelector((state: RootState) => state.drink.exitBox);
  const dispatch = useDispatch();
  const [isFilled, setIsFilled] = useState(false);

  useEffect(() => {
    if (exitBox.length > 0) {
      setIsFilled(true);
    } else {
      setIsFilled(false);
    }
  }, [exitBox.length]);

  const handleExitBox = () => {
    if (!isFilled) {
      return;
    }
    exitBox.map((drinkKey: string) => {
      dispatch(getDrink(drinkKey));
    });
  };
  return (
    <DoorArea>
      <DoorWrapper isFilled={isFilled} onClick={handleExitBox}>
        <ExitBox>{isFilled ? 'CLICK!' : 'DRINK'}</ExitBox>
      </DoorWrapper>
    </DoorArea>
  );
}

export default Door;
