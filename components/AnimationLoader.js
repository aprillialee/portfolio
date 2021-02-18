import styled from "styled-components";

function AnimationLoader() {
  return <AnimationLoaderStyled>I AM LOADING</AnimationLoaderStyled>;
}

const AnimationLoaderStyled = styled.div`
  width: 200px;
  height: 500px;
  background: red;
`;

export default AnimationLoader;
