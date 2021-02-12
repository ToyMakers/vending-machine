import React from 'react';
import styled, { css } from 'styled-components';
import Can from '../Can';
import { drinkData } from '../../constants/drinkData';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../modules';
import { buyDrink } from '../../modules/drink';
import { payCoin } from '../../modules/coin';
import { lighten } from 'polished';

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
  const coinInMachine = useSelector(
    (state: RootState) => state.coin.coinInMachine
  );
  const drinkStock = useSelector((state: RootState) => state.drink.drinkStock);
  const dispatch = useDispatch();

  // loops Objects of can datas and renders the components.
  const loopCans = (drinkKeyArr: string[]): JSX.Element[] => {
    const RenderedCans = drinkKeyArr.map((drinkKey: string, index: number) => {
      const canObj = drinkData[drinkKey];
      const toggleLight = coinInMachine >= canObj.price;
      const isSoldOut = drinkStock[drinkKey] < 1;

      const handleClick = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
      ) => {
        if (!toggleLight) {
          // check coin
          return;
        }

        if (isSoldOut) {
          // check stock
          alert(`${canObj.drinkName} is sold out`);
          return;
        }

        dispatch(buyDrink(drinkKey));
        // update coin in machine
        dispatch(payCoin(canObj.price));
      };

      return (
        <>
          <Can
            drinkName={canObj.drinkName}
            outerColor={canObj.outerColor}
            innerColor={canObj.innerColor}
            isFat={canObj.isFat}
            price={canObj.price}
            toggleLight={toggleLight}
            isSoldOut={isSoldOut}
            onClick={handleClick}
          />
        </>
      );
    });
    return RenderedCans;
  };
  return <ShelfBox>{loopCans(drinkKeyArr)}</ShelfBox>;
}

export default Shelf;
