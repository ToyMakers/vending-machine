import React from 'react';
import styled from 'styled-components';

const CoolorWrapper = styled.div`
  flex: 1;
  display: flex;
`;

const CoolorBox = styled.div`
  margin-top: auto;
  width: 100%;
  height: 30px;
  border-top: 3px solid #096b2b;
  border-left: 3px solid #096b2b;
  border-right: 3px solid #0a5f28;
  border-bottom: 3px solid #052e14;
  background-color: #013513;
  background-image: repeating-linear-gradient(
      180deg,
      transparent,
      transparent 20%,
      #2f583e 20%,
      #2f583e 25%
    ),
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 20%,
      #2f583e 20%,
      #2f583e 22%
    );
`;

function Coolor() {
  return (
    <CoolorWrapper>
      <CoolorBox />
    </CoolorWrapper>
  );
}

export default Coolor;
