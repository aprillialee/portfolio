import styled from "styled-components";

import Burger from "./Burger";

function Menu() {
  return (
    <MenuStyled>
      <Burger />
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  position: absolute;
  width: 100px;
  height: 400px;
  right: 0;
  top: 0;
`;
export default Menu;
