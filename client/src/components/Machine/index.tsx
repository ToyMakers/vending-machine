import React from 'react';
import styled from 'styled-components';
import Can from '../Can';
import LogoImg from '../../styles/img/logo.png';
import { palette } from '../../styles/theme';

const MachineWrapper = styled.div`
  width: 42rem;
  height: 65rem;
  background-color: #1c9d4a;
  box-shadow: inset 2px -2px 15px 5px #096b2b;
  padding: 1.8rem;
  display: flex;
  flex-direction: column;
`;

const LogoArea = styled.div`
  padding: 0.1rem;
  position: absolute;
  background-color: white;
  width: 3.2rem;
  height: 3.2rem;
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const ShelfWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem 0rem;
`;

const ShelfBox = styled.div`
  padding-top: 1.5rem;
  width: 100%;
  background-color: ${(props) => props.theme.shelf_background};

  display: flex;
  justify-content: space-around;
  align-items: flex-end;
`;

const ShelfBorder = styled.div`
  width: 100%;
  height: 2rem;
  background-color: #f7f3f3;
`;

const FatCan = styled(Can)`
  width: 4.5rem;
`;

interface CanType {
  can_name: string;
  outer_color: string;
  inner_color: string;
}

const coke = {
  can_name: 'coke',
  outer_color: palette.coke_outer,
  inner_color: palette.coke_inner,
};
const sprite = {
  can_name: 'sprite',
  outer_color: palette.sprite_outer,
  inner_color: palette.sprite_inner,
};
const pepper = {
  can_name: 'Dr. Pepper',
  outer_color: palette.pepper_outer,
  inner_color: palette.pepper_inner,
};

function index() {
  // loops Objects of can datas and renders the components.
  const loopCans = (cans: CanType[], isFat = false): JSX.Element[] => {
    let RenderedCans: JSX.Element[];
    if (isFat) {
      RenderedCans = cans.map((canObj: CanType, index: number) => {
        return (
          <>
            <FatCan
              can_name={canObj.can_name}
              outer_color={canObj.outer_color}
              inner_color={canObj.inner_color}
            />
          </>
        );
      });
    } else {
      RenderedCans = cans.map((canObj: CanType, index: number) => {
        return (
          <>
            <Can
              can_name={canObj.can_name}
              outer_color={canObj.outer_color}
              inner_color={canObj.inner_color}
            />
          </>
        );
      });
    }
    return RenderedCans;
  };

  return (
    <MachineWrapper>
      <ShelfWrapper>
        <LogoArea>
          <img src={LogoImg} />
        </LogoArea>
        <ShelfBox>{loopCans([coke, coke, coke])}</ShelfBox>
        <ShelfBorder></ShelfBorder>
        <ShelfBox>{loopCans([sprite, sprite, sprite])}</ShelfBox>
        <ShelfBorder></ShelfBorder>
        <ShelfBox>{loopCans([pepper, pepper, pepper], true)}</ShelfBox>
        <ShelfBorder></ShelfBorder>
      </ShelfWrapper>
    </MachineWrapper>
  );
}

export default index;
