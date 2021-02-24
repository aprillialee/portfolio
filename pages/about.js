import AboutPage from "../components/aboutpage/AboutPage";

import styled from "styled-components";

export default function About() {
  return (
    <AboutStyled>
      <AboutPage>HELLO</AboutPage>
    </AboutStyled>
  );
}

const AboutStyled = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
