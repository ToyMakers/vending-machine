import { darken } from 'polished';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { RootState } from '../../modules';
import { getDrink } from '../../modules/drink';

const DoorWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 2rem;
`;

const DoorBox = styled.div`
  overflow: hidden;
  width: 80%;
  height: 80px;

  ${(props) => {
    const selected = props.theme.main;
    return css`
      border: 3px solid ${darken(0.3, selected)};
      border-bottom: 8px solid ${darken(0.4, selected)};
      background-color: ${darken(0.5, selected)};
    `;
  }}
`;

const ExitBox = styled.button`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 5px;
  width: 100%;
  height: 100%;
  border: 1px solid rgba(255, 255, 255, 0.5);
  color: rgba(255, 255, 255, 0.2);
  background-color: transparent;
  background-image: linear-gradient(
    13deg,
    transparent,
    rgba(128, 128, 128, 0.5) 50%
  );
  font-size: 1.5em;
`;

function Door() {
  const exitBox = useSelector((state: RootState) => state.drink.exitBox);
  const dispatch = useDispatch();
  const handleExitBox = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (exitBox.length == 0) {
      return;
    }
    exitBox.map((drinkKey: string) => {
      dispatch(getDrink(drinkKey));
    });
  };
  return (
    <DoorWrapper>
      <DoorBox>
        <ExitBox onClick={handleExitBox}>DRINK</ExitBox>
      </DoorBox>
    </DoorWrapper>
  );
}

export default Door;
