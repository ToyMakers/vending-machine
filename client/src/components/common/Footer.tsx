import { darken } from 'polished';
import React from 'react';
import styled, { css } from 'styled-components';
import { respondTo } from '../../styles/mixin';

const FooterArea = styled.footer`
  font-weight: 600;
  height: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  ${(props) => {
    const main = props.theme.main;
    const point = props.theme.point;
    return css`
      background-color: ${darken(0.25, point)};
      color: ${darken(0.2, main)};
    `;
  }}

  ${respondTo.desktop`
    font-size: 1.5rem;
    `}
  p {
    margin: 0 0.8rem;
  }
  a {
    color: inherit;
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
