import styled from "styled-components";

function ExperiencePage() {
  return (
    <ExperienceStyled>
      <Title>Experience</Title>
      <ExperienceContainer>
        <ExperienceTop>
          <ExperienceTitle>The Online Sidekick</ExperienceTitle>
        </ExperienceTop>
        <Experience>
          <ExperienceTitle>The Funkasphere</ExperienceTitle>
        </Experience>
        <Experience>
          <ExperienceTitle>JM Design &#38; Joinery</ExperienceTitle>
        </Experience>
        <Experience>
          <ExperienceTitle>
            Stop Point Records &#38; Distribution
          </ExperienceTitle>
        </Experience>
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
  align-items: center;
  padding: 20px;
  width: 100%;
  height: 100px;
  border-top: solid 1px #f2f9ff;
  border-bottom: solid 1px #f2f9ff;

  :hover {
    background: rgb(255, 255, 255, 0.2);
    transition: 0.5s;
  }
`;

const Experience = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  width: 100%;
  height: 100px;
  border-bottom: solid 1px #f2f9ff;

  :hover {
    background: rgb(255, 255, 255, 0.2);
    transition: 0.5s;
  }
`;

const ExperienceTitle = styled.h2`
  font-family: "Coda", sans-serif;
  color: white;
  font-size: 20px;
  font-weight: 400;
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
`;
export default ExperiencePage;
