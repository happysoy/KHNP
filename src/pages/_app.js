// lightbox
import 'react-image-lightbox/style.css';
// lazy image
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';
// @mui
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';
// scroll bar
import 'simplebar/src/simplebar.css';
// theme
import ThemeProvider from '../theme';
// context
import { CollapseDrawerProvider } from '../contexts/CollapseDrawerContext';
import NotistackProvider from '../components/NotistackProvider';
import { AuthProvider } from '../contexts/CognitoContext';

import Head from 'next/head';
// redux
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '../redux/store';
// components
import MotionLazyContainer from '../components/animate/MotionLazyContainer';
import { ChartStyle } from '../components/chart';

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
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <CollapseDrawerProvider>
              <MotionLazyContainer>
                <ThemeProvider>
                  <NotistackProvider>
                    <ChartStyle />
                    {getLayout(<Component {...pageProps} />)}
                  </NotistackProvider>
                </ThemeProvider>
              </MotionLazyContainer>
            </CollapseDrawerProvider>
          </LocalizationProvider>
        </ReduxProvider>
      </AuthProvider>
    </>
  );
}
