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
  width: 29%;
  height: 200px;

  @media (max-width: 1040px) {
    width: 90%;
  }
`;

const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 50px;
  font-family: "Coda Caption", sans-serif;
  color: #f3e4d4;
`;

const Subtitle = styled.h2`
  margin: -15px 0 0 0;
  padding: 0;
  font-size: 20px;
  font-family: "Coda Caption", sans-serif;
  color: #f3e4d4;
`;

const Description = styled.p`
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-family: "Coda Caption", sans-serif;
  color: #bfc979;
  -webkit-text-stroke: 0.5px #2b2b2b;
`;

export default HomepageTitle;
