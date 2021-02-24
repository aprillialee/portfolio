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
        <div />
        <div />
        <div />
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
  height: 100%;
  background: ${({ open }) => (open ? "#200f59" : "")};

  div {
    margin-bottom: 5px;
    width: 40px;
    height: 5px;
    background: #f3e4d4;
    border-radius: 2px;
    border: 1px solid #200f59;
  }

  div:nth-child(2) {
    transform: ${({ open }) => (open ? "translateX(8px)" : "translateX(0)")};
  }
`;

export default Burger;
