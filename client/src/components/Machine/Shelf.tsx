import React from 'react';
import styled, { css } from 'styled-components';
import { lighten } from 'polished';
import { useCans } from '../../hooks/useCans';

const ShelfBox = styled.div`
  padding-top: 1.5rem;
  width: 100%;
  background-color: ${(props) => props.theme.shelfBackground};
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  ${(props) => {
    const selected = props.theme.main;
    return css`
      box-shadow: inset 1rem 1.3rem 2rem ${lighten(0.2, selected)};
      }
    `;
  }}
`;

interface ShelfProps {
  drinkKeyArr: string[];
}

// note
function Shelf({ drinkKeyArr }: ShelfProps) {
  const [renderCans] = useCans(drinkKeyArr, false);

  return <ShelfBox>{renderCans()}</ShelfBox>;
}

export default Shelf;
