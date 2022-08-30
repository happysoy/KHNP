// lazy image
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/opacity.css";
import "react-lazy-load-image-component/src/effects/black-and-white.css";

// scroll bar
import "simplebar/src/simplebar.css";
// theme
import ThemeProvider from "../theme";
// context
import { CollapseDrawerProvider } from "src/contexts/CollapseDrawerContext";
// next
import Head from "next/head";
// redux
import { Provider as ReduxProvider } from "react-redux";
import { store } from "src/redux/store";

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
        <ReduxProvider store={store}>
          <CollapseDrawerProvider>
            <ThemeProvider>
              {getLayout(<Component {...pageProps} />)}
            </ThemeProvider>
          </CollapseDrawerProvider>
        </ReduxProvider>
      </AuthProvider>
    </>
  );
}
