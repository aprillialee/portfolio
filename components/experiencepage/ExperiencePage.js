import styled from "styled-components";

import Link from "next/link";

import ExperiencePiece, {
  Experience,
  ExperienceTitle,
} from "./ExperiencePiece";

import { useState } from "react";

function ExperiencePage() {
  const [display, setDisplay] = useState(false);

  return (
    <ExperienceStyled>
      <Title>Experience</Title>
      <ExperienceContainer>
        <Link href="https://theonlinesidekick.com/" passHref={true}>
          <ExperienceTop>
            <ExperienceTitle
              onMouseEnter={() => setDisplay(true)}
              onMouseLeave={() => setDisplay(false)}
            >
              The Online Sidekick
              {display && (
                <p>
                  The Online Sidekick is a virtual assistant business. They
                  needed a trendy website which would reflect their target
                  market. I created the logo, website and copy. It was built
                  using React, NextJS and Styled-Components.
                </p>
              )}
            </ExperienceTitle>
          </ExperienceTop>
        </Link>
        <Link href="https://thefunkasphere.com/" passHref={true}>
          <a>
            <ExperiencePiece
              title="The Funkasphere"
              paragraph="The Funkasphere is a funk podcast that dives into world music influences. I used React-Three-Fiber, React and Styled Components to build this site."
            />
          </a>
        </Link>
        <ExperiencePiece
          title="JM Design &#38; Joinery"
          paragraph="JM Design &#38; Joinery is an upmarket firm that builds bespoke pieces for people with carpentry needs. I designed their logo, wrote the copy and built the website using React, NextJS and Styled-Components."
        />
      </ExperienceContainer>
      <ButtonContainer>
        <GithubButton>Github</GithubButton>
        <GithubButton>Instagram</GithubButton>
        <GithubButton>Medium</GithubButton>
      </ButtonContainer>
    </ExperienceStyled>
  );
}

const ExperienceStyled = styled.div`
  display: flex;
  top: 50px;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 40px;
`;

const Title = styled.div`
  font-size: 40px;
  color: #2b2b22;
  font-family: "Coda Caption", sans-serif;
  margin: 0px 0px 20px 0px;
`;

const ExperienceContainer = styled.div`
  width: 100%;
  height: 95%;
`;

const ExperienceTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  width: 100%;
  height: 100px;
  border-top: solid 1px #f2f9ff;
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

    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 100%;
`;

const GithubButton = styled.button`
  margin-right: 5%;
  width: 15%;
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
export default ExperiencePage;
