import { Provider } from 'react-redux';
import NextNProgress from 'nextjs-progressbar';

import getStore from '@/store/store';

import '../styles/globals.css';


function MyApp({ Component, pageProps }) {

  const store = getStore(pageProps.initialState);
  
  return (
    <Provider store={store}>
      <NextNProgress
        color="linear-gradient(90deg, rgba(0, 190, 124, 1) 0%, rgba(3, 222, 145,1) 40%, rgba(3, 222, 145,1) 100%)"
        height={3}
      />
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;