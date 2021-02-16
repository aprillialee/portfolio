import styled from "styled-components";

function MenuOptions({ open }) {
  return <MenuOptionsStyled open={open}></MenuOptionsStyled>;
}

const MenuOptionsStyled = styled.ul`
  width: 100px;
  height: 300px;
  padding-top: 30px;
  background: #200f59;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  list-style: none;
`;

const MenuOption = styled.li`
  width: 100px;
  margin-bottom: 15px;
  cursor: pointer;
`;

export default MenuOptions;
