import ReduxProvider from '../store';

export default function MyApp({ Component, pageProps }) {
    return(
    <ReduxProvider>
    <Component {...pageProps} /> 
    </ReduxProvider> );
  }