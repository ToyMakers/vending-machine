import React from 'react';
import styled from 'styled-components';
import { respondTo } from '../../styles/mixin';

const FooterArea = styled.footer`
  height: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  ${respondTo.desktop`
    font-size: 1.5rem;
    `}
  p {
    margin: 0 0.8rem;
  }
`;

function Footer() {
  return (
    <FooterArea>
      <p>Toy Makers</p>
      <a href="https://github.com/ToyMakers">GitHub</a>
    </FooterArea>
  );
}

export default Footer;
