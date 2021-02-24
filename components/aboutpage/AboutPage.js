import styled from "styled-components";

function AboutPage() {
  return (
    <AboutPageStyled>
      <AboutMe>About Me</AboutMe>
      <Paragraph>Hello, I'm Aprillia and I'm a front-end developer.</Paragraph>
      <Paragraph>
        While I spend most of my time working with React, I also enjoy design,
        writing, 3D programming/modelling and AWS.
      </Paragraph>
    </AboutPageStyled>
  );
}

const AboutPageStyled = styled.div`
  position: absolute;
  top: 80px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 60%;
  height: 80%;
  padding: 40px;
`;

const AboutMe = styled.h1`
  font-size: 40px;
  color: #2b2b22;
  font-family: "Coda Caption", sans-serif;
  margin: 0;
`;

const Paragraph = styled.p`
  margin: 7px 0px 0px 0px;
  font-size: 20px;
  color: #f3e4d4;
  font-family: "Coda", sans-serif;
`;

export default AboutPage;
