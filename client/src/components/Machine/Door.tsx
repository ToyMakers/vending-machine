import { darken, lighten } from 'polished';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css, keyframes } from 'styled-components';
import { useCans } from '../../hooks/useCans';
import { useExitCans } from '../../hooks/useExitCans';
import { RootState } from '../../modules';
import { getDrink } from '../../modules/drink';

const fall = (degVal: any) => keyframes`
  from {
    transform: translateY(-20px) rotate(10deg);
  }
  to {
    transform: translateY(10px) rotate(${degVal}deg);
  }
`;

interface DoorWrapperProps {
  exitBoxLen: any;
}

const DoorArea = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 2rem;
`;

const DoorWrapper = styled.div<DoorWrapperProps>`
  position: relative;
  overflow: hidden;
  width: 80%;
  height: 8rem;

  ${(props): any => {
    const main = props.theme.main;
    const point = props.theme.point;
    return props.exitBoxLen
      ? css`
          // turn on
          font-size: 1.7rem;
          cursor: pointer;
          font-weight: 800;
          border: 1px solid ${point};
          border-bottom: 2px solid ${point};
          color: rgba(255, 255, 255, 0.8);
          background-color: ${lighten(0.01, point)};
        `
      : css`
          // turn off
          font-size: 1.5rem;
          cursor: not-allowed;
          border: 2px solid ${darken(0.3, main)};
          border-bottom: 3px solid ${darken(0.4, main)};
          background-color: ${darken(0.5, main)};
          color: rgba(255, 255, 255, 0.2);
        `;
  }}
`;

const ExitText = styled.div`
  position: absolute;
  z-index: 100;
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

const ExitBox = styled.div`
  position: absolute;
  z-index: 99;
  bottom: -1rem;
  width: 100%;
  height: 100%;
  display: flex;
  background-color: transparent;
`;

function Door() {
  const exitBox = useSelector((state: RootState) => state.drink.exitBox);
  const dispatch = useDispatch();
  const [exitBoxLen, setExitBoxLen] = useState(0);
  const [renderCans, pushExitCan, popExitCan, resetExitCan] = useExitCans();

  useEffect(() => {
    const curExitBoxLen = exitBox.length;
    if (curExitBoxLen > 0) {
      if (curExitBoxLen > exitBoxLen) {
        setExitBoxLen(curExitBoxLen);
        pushExitCan(exitBox[curExitBoxLen - 1]);
      } else if (curExitBoxLen < exitBoxLen) {
        setExitBoxLen(curExitBoxLen);
        popExitCan();
      }
    } else {
      setExitBoxLen(0);
      resetExitCan();
    }
  }, [exitBox.length]);

  const handleExitBox = () => {
    if (!exitBoxLen) {
      return;
    }
    exitBox.map((drinkKey: string) => {
      dispatch(getDrink(drinkKey));
    });
  };

  return (
    <DoorArea>
      <DoorWrapper exitBoxLen={exitBoxLen} onClick={handleExitBox}>
        <ExitBox>{renderCans()}</ExitBox>
        <ExitText>{exitBoxLen ? 'CLICK!' : 'DRINK'}</ExitText>
      </DoorWrapper>
    </DoorArea>
  );
}

export default Door;
