import { darken, lighten } from 'polished';
import React from 'react';
import styled, { css } from 'styled-components';

const CoolorWrapper = styled.div`
  flex: 1;
  display: flex;
`;

const CoolorBox = styled.div`
  margin-top: auto;
  width: 100%;
  height: 30px;
  ${(props) => {
    const selected = props.theme.main;
    return css`
      border: 3px solid ${selected};
      border-bottom: 3px solid ${darken(0.4, selected)};
      background-color: ${darken(0.2, selected)};
      background-image: repeating-linear-gradient(
          180deg,
          transparent,
          transparent 20%,
          ${lighten(0.2, selected)} 20%,
          ${lighten(0.2, selected)} 25%
        ),
        repeating-linear-gradient(
          90deg,
          transparent,
          transparent 20%,
          ${lighten(0.15, selected)} 20%,
          ${lighten(0.15, selected)} 21%
        );
    `;
  }}
`;

function Coolor() {
  return (
    <CoolorWrapper>
      <CoolorBox />
    </CoolorWrapper>
  );
}

export default Coolor;
