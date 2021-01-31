import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../modules';
import Coin from '../Coin';

const BigCoin = styled(Coin)`
  width: 6.2rem;
  height: 6.2rem;
  font-size: 1.6rem;
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
  background-color: #959fa0;
  border-radius: 1.5rem 1.5rem 0 0;
`;

const CanCounterBlock = styled.div`
  border-radius: 0 1.5rem 0 0;
  padding: 1rem 3rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align: right;
  background-color: #7f8c8d;
  span {
    font-size: 2em;
    font-weight: 700;
    padding: 0.5rem;
  }
`;

const CanBlock = styled.div`
  padding: 3rem 2rem;
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  background-color: #95a5a6;
`;

function Inventory() {
  const inventoryData = useSelector(
    (state: RootState) => state.drink.inventory
  );
  console.log(inventoryData);
  return (
    <InventoryWrapper>
      <div>
        <InventoryTagBlock>My Inventory</InventoryTagBlock>
      </div>
      <CanCounterBlock>
        <span>x 3</span>
      </CanCounterBlock>
      <CanBlock>
        <Coin moneyValue={100} />
        <Coin moneyValue={500} />
        <BigCoin moneyValue={1000} />
        <BigCoin moneyValue={5000} />
      </CanBlock>
    </InventoryWrapper>
  );
}

export default Inventory;
