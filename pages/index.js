import Head from "next/head";

import React, { useState, useEffect } from "react";

import HomepageTitle from "../components/homepage/HomepageTitle";
import Menu from "../components/nav/Menu";

import dynamic from "next/dynamic";

const Background = dynamic(import("../r3fcomponents/Background"), {
  ssr: false,
});

export default function Home() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => setHasMounted(true), []);
  return (
    <>
      {hasMounted && <Background />}
      <HomepageTitle />
      <Menu />
    </>
  );
}
