import { darken } from 'polished';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useCans } from '../../hooks/useCans';
import { RootState } from '../../modules';
import { respondTo } from '../../styles/mixin';

const InventoryWrapper = styled.div`
  ${respondTo.desktop`
    width: 40rem;
  `}
  flex: 1;
  color: #fff;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
`;

const InventoryTagBlock = styled.h2`
  ${respondTo.desktop`
    display: inline-block;
  `}
  display: none;
  font-size: 2.2rem;
  font-weight: 700;
  text-align: center;
  padding: 1.5rem 2rem;
  background-color: ${(props) => props.theme.inventoryBackground};
  border-radius: 1.5rem 1.5rem 0 0;
`;

const CanCounterBlock = styled.div`
  ${respondTo.desktop`
    border-radius: 0 1.5rem 0 0;
  `}
  border-radius: 1.5rem 1.5rem 0 0;
  padding: 1rem 3rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align: right;
  background-color: ${(props) => darken(0.1, props.theme.inventoryBackground)};
  span {
    font-size: 2.5em;
    font-weight: 700;
  }
`;

const ItemArea = styled.div`
  height: 20rem;
  max-height: 20rem;
  padding: 4rem 2.5rem 1rem 2.5rem;
  display: flex;
  justify-content: center;
  overflow: scroll;
  width: 100%;
  background-color: ${(props) => props.theme.inventoryBackground};
`;

const ItemWrapper = styled.div`
  ${respondTo.desktop`
    flex-wrap: wrap;
    flex-direction: row;
  `}
  display: flex;
  height: 100%;
  flex-direction: column;
  width: 80%;
`;

function Inventory() {
  const [renderCans] = useCans([], false, true);

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
