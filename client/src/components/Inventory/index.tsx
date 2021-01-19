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

const WalletWrapper = styled.div`
  width: 40rem;
  color: #fff;
`;

const WalletTagBlock = styled.h2`
  display: inline-block;
  font-size: 2.2rem;
  font-weight: 700;
  text-align: center;
  padding: 1.5rem 2rem;
  background-color: #3a526b;
  border-radius: 1.5rem 1.5rem 0 0;
`;

const BalanceBlock = styled.div`
  border-radius: 0 1.5rem 0 0;
  padding: 1rem 3rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align: right;
  background-color: #2d3e4f;
  span {
    font-size: 2em;
    font-weight: 700;
    padding: 0.5rem;
  }
`;

const CoinBlock = styled.div`
  padding: 3rem 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  background-color: #3a526b;
`;

function Inventory() {
  const inventoryData = useSelector(
    (state: RootState) => state.drink.inventory
  );
  console.log(inventoryData);
  return (
    <WalletWrapper>
      <WalletTagBlock>My Inventory</WalletTagBlock>
      <BalanceBlock></BalanceBlock>
      <CoinBlock>
        <Coin moneyValue={100} />
        <Coin moneyValue={500} />
        <BigCoin moneyValue={1000} />
        <BigCoin moneyValue={5000} />
      </CoinBlock>
    </WalletWrapper>
  );
}

export default Inventory;
