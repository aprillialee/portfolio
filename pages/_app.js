import "../styles/globals.css";

import React, { useState, useEffect, Suspense } from "react";

import styled from "styled-components";

import Menu from "../components/nav/Menu";

import dynamic from "next/dynamic";

const Background = dynamic(import("../r3fcomponents/Background"), {
  ssr: false,
});

function MyApp({ Component, pageProps }) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => setHasMounted(true), []);
  return (
    <>
      <ShowOnDesktop>{hasMounted && <Background />}</ShowOnDesktop>
      <Component {...pageProps} />
      <Menu />
      <Banner>
        <Skills>
          • Press Esc to Get Your Cursor Back! • Made With NextJS, React,
          React-Three-Fiber, ThreeJS, Styled Components • Press Esc to Get Your
          Cursor Back! • Made With NextJS, React, React-Three-Fiber, ThreeJS,
          Styled Components
        </Skills>
      </Banner>
    </>
  );
}

const Banner = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 30px;
  background: rgb(255, 255, 255, 0.2);
  z-index: 1;

  @media (max-width: 1040px) {
    display: none;
  }
`;

const Skills = styled.p`
  display: inline-block;
  white-space: nowrap;
  font-size: 15px;
  color: #b1c8fc;
  -webkit-text-stroke: 1px white;
  font-family: "Coda", sans-serif;
  animation: floatText 35s infinite linear;
  padding-left: 100%;
  letter-spacing: 4px;

  @keyframes floatText {
    to {
      transform: translateX(-100%);
    }
  }

  @media (max-width: 1040px) {
    display: none;
  }
`;

const ShowOnDesktop = styled.div`
  @media (max-width: 1040px) {
    display: none;
  }
`;

export default MyApp;
