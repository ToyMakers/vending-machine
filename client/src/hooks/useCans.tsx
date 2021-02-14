import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Can from '../components/Can';
import { drinkData } from '../constants/drinkData';
import { RootState } from '../modules';
import { payCoin } from '../modules/coin';
import { buyDrink } from '../modules/drink';

export const useCans = (
  drinkKeyArr: string[],
  isMachine: boolean,
  isInventory: boolean
): [() => JSX.Element[]] => {
  const dispatch = useDispatch();

  const RenderedCans: JSX.Element[] = [];
  const renderCans: () => JSX.Element[] = () => {
    return RenderedCans;
  };

  if (isMachine) {
    // render cans in machine
    const coinInMachine = useSelector(
      (state: RootState) => state.coin.coinInMachine
    );
    const drinkStock = useSelector(
      (state: RootState) => state.drink.drinkStock
    );

    for (const drinkKey of drinkKeyArr) {
      const canObj = drinkData[drinkKey];
      const toggleLight = coinInMachine >= canObj.price;
      const isSoldOut = drinkStock[drinkKey] < 1;

      const handleClick = () => {
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
      RenderedCans.push(
        <>
          <Can
            canObj={canObj}
            isMachine={isMachine}
            toggleLight={toggleLight}
            isSoldOut={isSoldOut}
            onClick={handleClick}
          />
        </>
      );
    }
  } else if (isInventory) {
    // render cans in inverntory
    const canInInventory = useSelector(
      (state: RootState) => state.drink.inventory
    );

    for (const drinkKey in canInInventory) {
      const canObj = drinkData[drinkKey];
      canInInventory[drinkKey] !== 0 &&
        RenderedCans.push(
          <>
            <Can
              canObj={canObj}
              isInventory={true}
              canNumber={canInInventory[drinkKey]}
            />
          </>
        );
    }
  }
  return [renderCans];
};

useCans.defaultProps = {
  drinkKeyArr: [],
  isMachine: false,
  isInventory: false,
};
