import React from 'react';
import styled from 'styled-components';
import Can from '../Can';
import { CanType } from '../../constants/canData';

const FatCan = styled(Can)`
  width: 4.5rem;
`;

const ShelfBox = styled.div`
  padding-top: 1.5rem;
  width: 100%;
  background-color: ${(props) => props.theme.shelf_background};

  display: flex;
  justify-content: space-around;
  align-items: flex-end;
`;

interface ShelfProps {
  CanArr: CanType[];
}

// note
function Shelf({ CanArr }: ShelfProps) {
  // loops Objects of can datas and renders the components.
  const loopCans = (CanArr: CanType[], isFat = false): JSX.Element[] => {
    let RenderedCans: JSX.Element[];
    if (isFat) {
      RenderedCans = CanArr.map((canObj: CanType, index: number) => {
        return (
          <>
            <FatCan
              can_name={canObj.can_name}
              price={1}
              outer_color={canObj.outer_color}
              inner_color={canObj.inner_color}
            />
          </>
        );
      });
    } else {
      RenderedCans = CanArr.map((canObj: CanType, index: number) => {
        return (
          <>
            <Can
              can_name={canObj.can_name}
              price={1}
              outer_color={canObj.outer_color}
              inner_color={canObj.inner_color}
            />
          </>
        );
      });
    }
    return RenderedCans;
  };

  return <ShelfBox>{loopCans(CanArr)}</ShelfBox>;
}

export default Shelf;
