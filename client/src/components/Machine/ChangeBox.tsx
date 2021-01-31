import { darken, lighten } from 'polished';
import React from 'react';
import styled, { css } from 'styled-components';

const CoinBox = styled.button`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 5px;
  width: 100%;
  height: 100%;
  border: 0.5px solid rgba(255, 255, 255, 0.5);
  color: rgba(255, 255, 255, 0.2);
  background-color: transparent;
  background-image: linear-gradient(
    13deg,
    transparent,
    rgba(128, 128, 128, 0.5) 50%
  );
  font-size: 1rem;
`;

const ChangeBoxWrapper = styled.div`
  overflow: hidden;
  width: 4.3rem;
  height: 4.3rem;
  ${(props) => {
    const selected = props.theme.main;
    return css`
      border: 1px solid ${darken(0.3, selected)};
      border-bottom: 4px solid ${darken(0.4, selected)};
      background-color: ${darken(0.5, selected)};
    `;
  }}
`;

function ChangeBox() {
  return (
    <div>
      <ChangeBoxWrapper>
        <CoinBox>COIN</CoinBox>
      </ChangeBoxWrapper>
    </div>
  );
}

export default ChangeBox;
