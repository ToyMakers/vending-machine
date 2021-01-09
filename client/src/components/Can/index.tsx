import React from 'react';
import styled, { css } from 'styled-components';
import { CanType } from '../../constants/canData';

const CanBlock = styled.div`
  width: 3.5rem;
  height: 6.5rem;
  position: relative;
  margin-bottom: 2px;
  border-radius: 0.4rem;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;

  /* 아래 -> 위, 첫 번째 색으로 입구 부분 표현 */
  /* 왼쪽 -> 오른쪽, 20%까지 첫 번째 색, 나머지는 서서히 바뀜 */
  ${(props: any) =>
    css`
      background-image: linear-gradient(
          180deg,
          ${props.outer_color} 0.3em,
          ${props.outer_color} 0.3em,
          transparent 0.4em,
          transparent
        ),
        linear-gradient(
          90deg,
          ${props.outer_color} 20%,
          ${props.inner_color},
          rgba(255, 255, 255, 0.5),
          ${props.outer_color}
        );
    `}

  border-top: 3px solid gray;

  &::before,
  &::after {
    content: '';
    width: 0.1em;
    height: 0.3em;
    position: absolute;
    top: 0;
    background-color: ${(props) => props.theme.shelf_background};
  }
  &::before {
    left: 0;
  }
  &::after {
    right: 0;
  }
`;

const CanText = styled.span`
  position: absolute;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.4rem;
  transform-origin: 0 0; // 회전 중심
  transform: translateY(-50%) translateX(-25%) translateZ(10px) rotateX(10deg)
    rotateZ(25deg) rotateY(-10deg);
  font-family: 'Lobster', cursive;
  top: 40%;
  left: 45%;
`;

const PriceBox = styled.div`
  position: absolute;
  background-color: #0e0d0d;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  color: red;
  height: 1.4rem;
  width: 100%;
  bottom: -2rem;
  p {
    font-weight: 700;
    font-size: 1.1rem;
    flex: 1;
    text-align: center;
    span {
      font-size: 0.8rem;
    }
  }
`;

function index({ can_name, price, ...rest }: CanType) {
  return (
    <>
      <CanBlock {...rest}>
        <CanText>{can_name}</CanText>
        <PriceBox>
          <p>
            {price}
            <span>₩</span>
          </p>
        </PriceBox>
      </CanBlock>
    </>
  );
}

export default index;
