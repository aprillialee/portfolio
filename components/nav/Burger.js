import styled from "styled-components";

import MenuOptions from "./MenuOptions";

import { useState } from "react";

function Burger() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <BurgerStyled
        open={open}
        onClick={() => setOpen(!open)}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <DIVS>
          <div />
          <div />
          <div />
        </DIVS>
        <MenuOptions open={open} />
      </BurgerStyled>
    </>
  );
}

const BurgerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: ${({ open }) => (open ? "#b1c8fc" : "")};
`;

const DIVS = styled.div`
  margin-top: 40px;

  div {
    margin-bottom: 5px;
    width: 40px;
    height: 5px;
    background: #f3e4d4;
    border-radius: 2px;
    border: 1px solid #200f59;
  }

  div:nth-child(2) {
  }
`;

export default Burger;
