import Head from "next/head";

import styled from "styled-components";

import React from "react";

import HomepageTitle from "../components/homepage/HomepageTitle";

export default function Home() {
  return (
    <>
      <HomepageTitle />
      <ViewOnDesktop>Looks Best On Desktop</ViewOnDesktop>
    </>
  );
}

const ViewOnDesktop = styled.h1`
  display: none;
  @media (max-width: 1040px) {
    display: flex;
    position: absolute;
    top: 50px;
    left: 50px;
    color: #b1c8fc;
    -webkit-text-stroke: 1px white;
    font-size: 40px;
    font-family: "Coda Caption", sans-serif;
    padding-left: 100%;
    display: inline-block;
    white-space: nowrap;
    animation: floatText 25s infinite linear;

    @keyframes floatText {
      to {
        transform: translateX(-100%);
      }
    }
  }
`;
