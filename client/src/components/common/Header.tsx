import React from 'react';
import styled from 'styled-components';

const HeaderArea = styled.header`
  background-color: ${(props) => props.theme.mainBackground};
  height: 2vh;
`;

function Header() {
  return <HeaderArea></HeaderArea>;
}

export default Header;
