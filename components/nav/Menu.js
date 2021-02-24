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
  height: 100%;
  right: 0;
  top: 0;
  z-index: 2;
`;
export default Menu;
