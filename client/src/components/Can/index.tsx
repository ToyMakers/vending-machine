import React from 'react';
import styled, { css } from 'styled-components';

const CanBlock = styled.div`
  width: 5rem;
  height: 8rem;
  position: relative;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;

  /* 아래 -> 위, 첫 번째 색으로 입구 부분 표현 */
  /* 왼쪽 -> 오른쪽, 20%까지 첫 번째 색, 나머지는 서서히 바뀜 */
  ${(props: any) =>
    css`
      background-image: linear-gradient(
          180deg,
          ${props.outer_color} 0.3em,
          #7a2820 0.3em,
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
    background-color: ${(props) => props.theme.vending_machine_inner};
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
  font-size: 1.7rem;
  transform-origin: 0 0; // 회전 중심
  transform: translateY(-50%) translateX(-25%) translateZ(10px) rotateX(10deg)
    rotateZ(25deg) rotateY(-10deg);
  font-family: 'Lobster', cursive;
  top: 40%;
  left: 50%;
`;

function index({ outer_color, inner_color, can_name, ...rest }: any) {
  return (
    <CanBlock outer_color={outer_color} inner_color={inner_color} {...rest}>
      <CanText>{can_name}</CanText>
    </CanBlock>
  );
}

export default index;
