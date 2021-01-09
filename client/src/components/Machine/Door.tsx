import React from 'react';
import styled from 'styled-components';

const DoorWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 2rem;
`;

const DoorBox = styled.div`
  overflow: hidden;
  width: 80%;
  height: 80px;
  border-top: 5px solid #107533;
  border-left: 5px solid #117032;
  border-right: 5px solid #1a6936;
  border-bottom: 20px solid #233829;
  background-color: #02200d;
  perspective: 80px;
`;

const OutLet = styled.button`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 5px;
  width: 100%;
  height: 100%;
  border: 1px solid rgba(255, 255, 255, 0.5);
  color: rgba(255, 255, 255, 0.2);
  background-color: transparent;
  background-image: linear-gradient(
    13deg,
    transparent,
    rgba(128, 128, 128, 0.5) 50%
  );
  font-size: 1.5em;
`;

function Door() {
  return (
    <DoorWrapper>
      <DoorBox>
        <OutLet>PUSH</OutLet>
      </DoorBox>
    </DoorWrapper>
  );
}

export default Door;
