import React from 'react';
import styled from 'styled-components';
import Can from '../Can';
import { DrinkType } from '../../constants/drinkData';
import { useSelector } from 'react-redux';
import { RootState } from '../../modules';

const ShelfBox = styled.div`
  padding-top: 1.5rem;
  width: 100%;
  background-color: ${(props) => props.theme.shelf_background};
  box-shadow: inset 5px 5px 10px #aaa7a7;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
`;

interface ShelfProps {
  drinkArr: DrinkType[];
}

// note
function Shelf({ drinkArr }: ShelfProps) {
  const moneyInMachine = useSelector(
    (state: RootState) => state.coin.coinInMachine
  );
  // loops Objects of can datas and renders the components.
  const loopCans = (drinkArr: DrinkType[]): JSX.Element[] => {
    const RenderedCans = drinkArr.map((canObj: DrinkType, index: number) => {
      const toggleLight = moneyInMachine >= canObj.price;
      console.log(canObj.isFat);
      return (
        <>
          <Can
            drinkName={canObj.drinkName}
            outerColor={canObj.outerColor}
            innerColor={canObj.innerColor}
            price={canObj.price}
            isFat={canObj.isFat}
            toggleLight={toggleLight}
          />
        </>
      );
    });
    return RenderedCans;
  };
  return <ShelfBox>{loopCans(drinkArr)}</ShelfBox>;
}

export default Shelf;
