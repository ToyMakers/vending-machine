import { darken } from 'polished';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../modules';
import { respondTo } from '../../styles/mixin';
import putComma from '../../util/putComma';
import Coin from '../Coin';

const WalletWrapper = styled.div`
  ${respondTo.desktop`
    width: 40rem;
  `}
  flex: 1;
  color: #fff;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
`;

const WalletTagBlock = styled.h2`
  ${respondTo.desktop`
    display: inline-block;
  `}
  display: none;
  font-size: 2.2rem;
  font-weight: 700;
  text-align: center;
  padding: 1.5rem 2rem;
  background-color: ${(props) => props.theme.walletBackground};
  border-radius: 1.5rem 1.5rem 0 0;
`;

const BalanceBlock = styled.div`
  ${respondTo.desktop`
    border-radius: 0 1.5rem 0 0;
  `}
  border-radius: 1.5rem 1.5rem 0 0;
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

const CoinList = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CoinBlock = styled.div`
  ${respondTo.desktop`
    flex-direction: row;
  `}
  height: 20rem;
  max-height: 20rem;
  padding: 2rem 2rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
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
      <div>
        <WalletTagBlock>My Wallet</WalletTagBlock>
      </div>
      <BalanceBlock>
        <span>₩ {coinInWalletWithComma}</span>
      </BalanceBlock>
      <CoinBlock>
        <CoinList>
          <Coin moneyValue={100} />
          <Coin moneyValue={500} />
        </CoinList>
        <CoinList>
          <Coin moneyValue={1000} isBig={true} />
          <Coin moneyValue={5000} isBig={true} />
        </CoinList>
      </CoinBlock>
    </WalletWrapper>
  );
}

export default Wallet;
