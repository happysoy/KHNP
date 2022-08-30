// scroll bar
import "simplebar/src/simplebar.css";
// theme
import ThemeProvider from "../theme";
// context
import { CollapseDrawerProvider } from "src/contexts/CollapseDrawerContext";
// next
import Head from "next/head";
import { AuthProvider } from "src/contexts/AwsCognitoContext";

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <AuthProvider>
        <CollapseDrawerProvider>
          <ThemeProvider>
            {getLayout(<Component {...pageProps} />)}
          </ThemeProvider>
        </CollapseDrawerProvider>
      </AuthProvider>
    </>
  );
}
