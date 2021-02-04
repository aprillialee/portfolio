import styled from "styled-components";

function Burger() {
  return (
    <BurgerStyled>
      <div />
      <div />
      <div />
    </BurgerStyled>
  );
}

const BurgerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;

  :hover {
    background: #200f59;
  }

  div {
    margin-bottom: 5px;
    width: 40px;
    height: 5px;
    border-radius: 2px;
    background: #f3e4d4;
    border: 1px solid #200f59;
  }
`;

export default Burger;
