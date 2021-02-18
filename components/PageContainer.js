import styled from "styled-components";

function PageContainer() {
  return <PageContainerStyled />;
}

const PageContainerStyled = styled.div`
  width: 100vw;
  height: 1000px;
  background-image: url("/confetti.jpg");
`;

export default PageContainer;
