import { darken } from 'polished';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useCans } from '../../hooks/useCans';
import { RootState } from '../../modules';

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

const ItemArea = styled.div`
  padding: 4rem 4.5rem 1rem 4.5rem;
  display: flex;
  max-height: 30rem;
  overflow: scroll;
  flex: 1;
  width: 100%;
  background-color: ${(props) => props.theme.inventoryBackground};
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  align-content: flex-start;
`;

function Inventory() {
  const [renderCans] = useCans([], true);

  const canInInventory = useSelector(
    (state: RootState) => state.drink.inventory
  );

  const countCan = (canInInventory: { [key: string]: number }) => {
    let totalCanNum = 0;
    for (const canKey in canInInventory) {
      totalCanNum += canInInventory[canKey];
    }
    return totalCanNum;
  };
  return (
    <InventoryWrapper>
      <div>
        <InventoryTagBlock>My Inventory</InventoryTagBlock>
      </div>
      <CanCounterBlock>
        <span>{countCan(canInInventory)}</span>
      </CanCounterBlock>
      <ItemArea>
        <ItemWrapper>{renderCans()}</ItemWrapper>
      </ItemArea>
    </InventoryWrapper>
  );
}

export default Inventory;
