import "../styles/globals.css";

import Menu from "../components/nav/Menu";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Menu />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
