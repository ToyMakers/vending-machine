import React from 'react';
import styled from 'styled-components';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import Machine from '../components/Machine';

const MainPageWrapper = styled.div`
  height: 80vh;
  background-color: ${(props) => props.theme.background};
`;

function MainPage() {
  return (
    <>
      <Header />
      <MainPageWrapper>
        <Machine />
      </MainPageWrapper>
      <Footer />
    </>
  );
}

export default MainPage;
