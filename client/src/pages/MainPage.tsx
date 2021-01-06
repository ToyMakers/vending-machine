import React from 'react';
import styled from 'styled-components';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import Can from '../components/Can';
import { palette } from '../styles/theme';

const MainPageWrapper = styled.div`
  height: 80vh;
  background-color: ${(props) => props.theme.background};
`;
const Machine = styled.div`
  width: 40rem;
  height: 20rem;
  background-color: ${(props) => props.theme.vending_machine_inner};
  display: flex;
  justify-content: center;
  align-items: center;
`;

function MainPage() {
  return (
    <>
      <Header />
      <MainPageWrapper>
        <Machine>
          <Can
            outer_color={palette.coke_outer}
            inner_color={palette.coke_inner}
            can_name={'coke'}
          />
        </Machine>
      </MainPageWrapper>
      <Footer />
    </>
  );
}

export default MainPage;
