import { darken } from 'polished';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { drinkData } from '../../constants/drinkData';
import { RootState } from '../../modules';
import Can from '../Can';

const CanArea = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const InventoryWrapper = styled.div`
  width: 40rem;
  flex: 1;
  color: #fff;
  display: flex;
  flex-direction: column;
`;

const InventoryTagBlock = styled.h2`
  display: inline-block;
  font-size: 2.2rem;
  font-weight: 700;
  text-align: center;
  padding: 1.5rem 2rem;
  background-color: ${(props) => props.theme.inventoryBackground};
  border-radius: 1.5rem 1.5rem 0 0;
`;

const CanCounterBlock = styled.div`
  border-radius: 0 1.5rem 0 0;
  padding: 1rem 3rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align: right;
  background-color: ${(props) => darken(0.1, props.theme.inventoryBackground)};
  span {
    font-size: 2em;
    font-weight: 700;
    padding: 0.5rem;
  }
`;

const ItemWrapper = styled.div`
  padding: 3rem 4.5rem;
  flex: 1;
  display: flex;
  width: 100%;
  background-color: ${(props) => props.theme.inventoryBackground};
`;

function Inventory() {
  const canInInventory = useSelector(
    (state: RootState) => state.drink.inventory
  );

  const loopCans = (canInInventory: {
    [drinkey: string]: number;
  }): JSX.Element[] => {
    const RenderedCans: JSX.Element[] = [];
    for (const drinkKey in canInInventory) {
      const canObj = drinkData[drinkKey];
      canInInventory[drinkKey] !== 0 &&
        RenderedCans.push(
          <CanArea>
            <Can
              drinkName={canObj.drinkName}
              outerColor={canObj.outerColor}
              innerColor={canObj.innerColor}
              isInventory={true}
              canNumber={canInInventory[drinkKey]}
            />
          </CanArea>
        );
    }
    return RenderedCans;
  };
  return (
    <InventoryWrapper>
      <div>
        <InventoryTagBlock>My Inventory</InventoryTagBlock>
      </div>
      <CanCounterBlock>
        <span>x 3</span>
      </CanCounterBlock>
      <ItemWrapper>{loopCans(canInInventory)}</ItemWrapper>
    </InventoryWrapper>
  );
}

export default Inventory;
