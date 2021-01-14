import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../modules';
import Coin from '../Coin';

const WalletWrapper = styled.div`
  width: 40rem;
  padding: 2rem;
`;

const WalletTag = styled.h2`
  display: inline-block;
  font-size: 2rem;
  font-weight: 700;
  padding: 1rem;
  background-color: #236fa0;
`;

const BalanceBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #fff;
  height: 5rem;
  text-align: right;
  background-color: #11354c;
  span {
    font-size: 1.8em;
    padding: 0.5rem;
  }
`;

const WalletCoins = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 15rem;
  background-color: #1a5276;
`;

function Wallet() {
  const coinInWallet = useSelector(
    (state: RootState) => state.coin.coinInWallet
  );
  return (
    <WalletWrapper>
      <WalletTag>My wallet</WalletTag>
      <BalanceBox>
        <span>{coinInWallet}</span>
      </BalanceBox>
      <WalletCoins>
        <Coin moneyValue={100} />
        <Coin moneyValue={500} />
        <Coin moneyValue={1000} />
      </WalletCoins>
    </WalletWrapper>
  );
}

export default Wallet;
