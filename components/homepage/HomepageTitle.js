import styled from "styled-components";

function HomepageTitle() {
  return (
    <HomepageTitleStyled>
      <Title>APRILLIA LEE</Title>
      <Subtitle>FRONT END / REACT DEVELOPER</Subtitle>
      <Description>
        Diligent developer looking to plunge into a new and exciting
        opportunity.
      </Description>
    </HomepageTitleStyled>
  );
}

const HomepageTitleStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  bottom: 0;
  margin-bottom: 20px;
  margin-left: 50px;
  width: 380px;
  height: 200px;

  @media (max-width: 1070px) {
    width: 40%;
  }

  @media (max-width: 768px) {
    width: 75%;
  }
`;

const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 50px;
  font-family: "Coda Caption", sans-serif;
  color: #2b2b2b;
`;

const Subtitle = styled.h2`
  margin: -15px 0 0 0;
  padding: 0;
  font-size: 20px;
  font-family: "Coda Caption", sans-serif;
  color: #2b2b2b;
`;

const Description = styled.p`
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-family: "Coda Caption", sans-serif;
  color: #f3e4d4;
`;

export default HomepageTitle;
