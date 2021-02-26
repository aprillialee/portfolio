import styled from "styled-components";

import { useState } from "react";

function ExperiencePiece(props) {
  const [display, setDisplay] = useState(false);
  return (
    <Experience
      onMouseEnter={() => setDisplay(true)}
      onMouseLeave={() => setDisplay(false)}
    >
      <ExperienceTitle>
        {props.title}
        {display && <p>{props.paragraph}</p>}
      </ExperienceTitle>
    </Experience>
  );
}

export const Experience = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  width: 100%;
  height: 100px;
  border-bottom: solid 1px #f2f9ff;
  cursor: pointer;

  :hover {
    background: rgb(255, 255, 255, 0.2);
    transition: 0.5s;
  }

  p {
    font-family: "Coda", sans-serif;
    font-weight: 400;
    font-size: 16px;
    margin: 0;
    color: white;
  }
`;

export const ExperienceTitle = styled.h2`
  font-family: "Coda", sans-serif;
  color: white;
  font-size: 20px;
  font-weight: 400;
  margin: 0;
`;

export default ExperiencePiece;
