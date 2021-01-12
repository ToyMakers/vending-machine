import React from 'react';
import styled from 'styled-components';

const CounterWrapper = styled.div`
  background-color: green;
  height: 4rem;
  padding: 1.2rem;
  text-align: right;
  color: green;
  font-size: 1.8rem;
  text-shadow: 0 0 2px #90ee90;
  box-shadow: inset 0 0 10px 3px rgba(255, 255, 255, 0.2),
    -1px 1px 5px 2px rgba(24, 24, 24, 0.5);
  background-color: #181818;
`;

function Counter() {
  return <CounterWrapper>0원</CounterWrapper>;
}

export default Counter;