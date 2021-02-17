import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Can from '../components/Can';
import { drinkData } from '../constants/drinkData';

const fall = (degVal: any) => keyframes`
  from {
    transform: translateY(-20px) rotate(10deg);
  }
  to {
    transform: translateY(10px) rotate(${degVal}deg);
  }
`;

interface ExitCanProps {
  degVal: any;
  location: any;
}

const ExitCan = styled.div<ExitCanProps>`
  left: ${(props) => props.location}%;
  bottom: -5px;
  position: absolute;
  animation: ${(props) => fall(props.degVal)} 1s forwards;
`;

type useExitCansResult = [
  () => JSX.Element[],
  (drinkKey: string) => void,
  () => void,
  () => void
];

export const useExitCans = (): useExitCansResult => {
  const getRandLoc = () => Math.round(Math.random() * 85);
  const getRandDeg = () => Math.round(Math.random() * 40) + 70;
  const [RenderedCans, setRenderedCans] = useState<JSX.Element[]>([]);

  const pushExitCan = (drinkKey: string) => {
    const canObj = drinkData[drinkKey];
    const NewCan = (
      <ExitCan degVal={getRandDeg()} location={getRandLoc()}>
        <Can canObj={canObj} />
      </ExitCan>
    );
    setRenderedCans([...RenderedCans, NewCan]);
  };

  const popExitCan = () => {
    setRenderedCans(RenderedCans.slice(0, RenderedCans.length - 1));
  };

  const resetExitCan = () => {
    setRenderedCans([]);
  };

  const renderCans: () => JSX.Element[] = () => {
    return RenderedCans;
  };

  return [renderCans, pushExitCan, popExitCan, resetExitCan];
};

useExitCans.defaultProps = {
  drinkKeyArr: [],
};
