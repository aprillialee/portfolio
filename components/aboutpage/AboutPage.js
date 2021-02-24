import styled from "styled-components";

function AboutPage() {
  return (
    <AboutPageStyled>
      <AboutMe>About Me</AboutMe>
      <Paragraph1>Some spiel here</Paragraph1>
    </AboutPageStyled>
  );
}

const AboutPageStyled = styled.div`
  position: absolute;
  top: 80px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
  height: 80%;
  padding: 40px;
`;

const AboutMe = styled.h1`
  font-size: 40px;
  color: #2b2b22;
  font-family: "Coda Caption", sans-serif;
  margin: 0;
`;

const Paragraph1 = styled.p`
  margin: 0;
  font-size: 18px;
  color: #f3e4d4;
  font-weight: 400;
  font-family: "Coda", sans-serif;
`;

export default AboutPage;
