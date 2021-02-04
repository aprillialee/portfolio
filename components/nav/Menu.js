import styled from "styled-components";

function Menu() {
  return (
    <MenuStyled>
      <h1>HELLO</h1>
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  position: absolute;
  background: #200f59;
  width: 80px;
  height: 400px;
  right: 0;
  top: 0;
`;
export default Menu;
