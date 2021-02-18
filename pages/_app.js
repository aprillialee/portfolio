import "../styles/globals.css";

import Menu from "../components/nav/Menu";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Menu />
    </>
  );
}

export default MyApp;
