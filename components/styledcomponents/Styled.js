import styled from "styled-components";

export const Title = styled.div`
  font-size: 40px;
  color: #2b2b22;
  font-family: "Coda Caption", sans-serif;
  margin: 0px 0px 20px 0px;
`;

export const Button = styled.button`
  margin-right: 5%;
  width: 200px;
  height: 50px;
  font-family: "Coda", sans-serif;
  color: white;
  font-size: 16px;
  border: 1px solid white;
  background: none;

  :hover {
    background: rgb(255, 255, 255, 0.2);
    transition: 0.5s;
  }

  @media (max-width: 768px) {
    width: 40%;
  }
`;
