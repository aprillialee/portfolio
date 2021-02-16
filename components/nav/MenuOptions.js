import styled from "styled-components";

function MenuOptions({ open }) {
  return <MenuOptionsStyled open={open}></MenuOptionsStyled>;
}

const MenuOptionsStyled = styled.ul`
  width: 100px;
  height: 300px;
  background: #200f59;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
`;

export default MenuOptions;
