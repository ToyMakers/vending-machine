import { darken } from 'polished';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../modules';
import putComma from '../../util/putComma';
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
  background-color: ${(props) => props.theme.walletBackground};
  border-radius: 1.5rem 1.5rem 0 0;
`;

const BalanceBlock = styled.div`
  border-radius: 0 1.5rem 0 0;
  padding: 1rem 3rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align: right;
  background-color: ${(props) => darken(0.1, props.theme.walletBackground)};
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
  background-color: ${(props) => props.theme.walletBackground};
`;

function Wallet() {
  const coinInWallet = useSelector(
    (state: RootState) => state.coin.coinInWallet
  );
  const coinInWalletWithComma = putComma(coinInWallet);
  return (
    <WalletWrapper>
      <WalletTagBlock>My Wallet</WalletTagBlock>
      <BalanceBlock>
        <span>₩ {coinInWalletWithComma}</span>
      </BalanceBlock>
      <CoinBlock>
        <Coin moneyValue={100} />
        <Coin moneyValue={500} />
        <BigCoin moneyValue={1000} />
        <BigCoin moneyValue={5000} />
      </CoinBlock>
    </WalletWrapper>
  );
}

export default Wallet;
