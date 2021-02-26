import styled from "styled-components";

import { Title } from "../styledcomponents/Styled";

function AboutPage() {
  return (
    <AboutPageStyled>
      <Title>About Me</Title>
      <Paragraph>Hello, I'm Aprillia and I'm a front-end developer.</Paragraph>
      <Paragraph>
        While I spend most of my time working with React, I also enjoy 3D
        programming/modelling, design and writing.
      </Paragraph>
      <Paragraph>
        I have mostly been working as a freelancer for the past year but I am
        now looking for a permanent opportunity to learn more about the industry
        and develop my work processes further.
      </Paragraph>
      <Paragraph>
        In my spare time, I enjoy playing guitar, listening to the funk and
        crocheting socks for my friends!
      </Paragraph>
      <SkillsTitle>Skills</SkillsTitle>
      <SkillList>
        <Skill>HTML</Skill>
        <Skill>CSS</Skill>
        <Skill>SCSS</Skill>
        <Skill>Styled Components</Skill>
        <Skill>Tailwind</Skill>
        <Skill>Javascript</Skill>
        <Skill>React</Skill>
        <Skill>NextJS</Skill>
        <Skill>GraphQL</Skill>
        <Skill>AWS Amplify</Skill>
        <Skill>ThreeJS</Skill>
        <Skill>React Three Fiber</Skill>
        <Skill>Blender</Skill>
        <Skill>WordPress</Skill>
        <Skill>Wix/SquareSpace</Skill>
        <Skill>Adobe InDesign</Skill>
        <Skill>Adobe PhotoShop</Skill>
        <Skill>Figma</Skill>
        <Skill>Inkscape</Skill>
      </SkillList>
      <ReachOut>
        Feel free to reach out to me or take a look at my
        <a href="https://www.instagram.com/aprillialee">
          <b> Instagram</b>
        </a>
        ,
        <a href="https://twitter.com/prillyio">
          <b>Twitter</b>
        </a>
        ,
        <a href="https://github.com/aprillialee">
          <b> Github </b>
        </a>
        or
        <a href="https://medium.com/@aprillialee">
          <b> Medium</b>
        </a>
      </ReachOut>
    </AboutPageStyled>
  );
}

const AboutPageStyled = styled.div`
  position: absolute;
  top: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 70%;
  height: 100%;
  padding: 40px;

  @media (max-width: 768px) {
    width: 90%;
    top: 0;
  }
`;

const SkillsTitle = styled.h2`
  font-size: 30px;
  color: #2b2b22;
  font-family: "Coda Caption", sans-serif;
  margin: 15px 0px 0px 0px;
`;

const SkillList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  height: 300px;
  width: 100%;
  margin-bottom: 0;
`;

const Skill = styled.li`
  margin-right: 30px;
  font-size: 18px;
  color: #f3e4d4;
  font-family: "Coda", sans-serif;

  @media (max-width: 1040px) {
    margin: 0px 30px 0px 0px;
    font-size: 15px;
  }
`;

const Paragraph = styled.p`
  margin: 0px 0px 5px 0px;
  font-size: 18px;
  color: #f3e4d4;
  font-family: "Coda", sans-serif;
  -webkit-text-stroke: 1px white;

  @media (max-width: 1040px) {
    margin: 5px 0px 0px 0px;
    font-size: 15px;
  }
`;

const ReachOut = styled.p`
  margin: 0;
  font-size: 18px;
  color: #f3e4d4;
  font-family: "Coda", sans-serif;
  -webkit-text-stroke: 1px white;

  @media (max-width: 1040px) {
    margin: 5px 0px 0px 0px;
    font-size: 15px;
  }
`;

export default AboutPage;
