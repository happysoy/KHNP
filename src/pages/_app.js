import '../sections/dashboard/auto-evaluation/add-delete-table/style.css';
import '../sections/dashboard/manual-evaluation/graph/style.css';
// lightbox
import 'react-image-lightbox/style.css';
// lazy image
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';
// @mui
// scroll bar
import 'simplebar/src/simplebar.css';
// slick-carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// theme
import ThemeProvider from '../theme';
// context
import { TableDataProvider } from '../contexts/TableDataContext';
import { CollapseDrawerProvider } from '../contexts/CollapseDrawerContext';
import NotistackProvider from '../components/NotistackProvider';
import { AuthProvider } from '../contexts/AwsCognitoContext';
import { AxisStateProvider } from '../contexts/AxisStateContext';

import Head from 'next/head';
import { PersistGate } from 'redux-persist/lib/integration/react';
// redux
import { Provider as ReduxProvider } from 'react-redux';
import { persistor, store } from '../redux/store';
// components
import MotionLazyContainer from '../components/animate/MotionLazyContainer';
import ProgressBar from '../components/ProgressBar';

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
          <PersistGate loading={null} persistor={persistor}>
            <CollapseDrawerProvider>
              <MotionLazyContainer>
                <TableDataProvider>
                  <AxisStateProvider>
                    <ThemeProvider>
                      <NotistackProvider>
                        {getLayout(<Component {...pageProps} />)}
                        <ProgressBar />
                      </NotistackProvider>
                    </ThemeProvider>
                  </AxisStateProvider>
                </TableDataProvider>
              </MotionLazyContainer>
            </CollapseDrawerProvider>
          </PersistGate>
        </ReduxProvider>
      </AuthProvider>
    </>
  );
}
