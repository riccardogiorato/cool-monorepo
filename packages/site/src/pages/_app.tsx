import type { AppProps /*, AppContext */ } from "next/app";
import { Header } from "design-system";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
