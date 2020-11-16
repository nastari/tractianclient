import '../styles/globals.css';

import '../css/antd.less';
import EscopeProvider from '../context/Escope';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <EscopeProvider>
        <Component {...pageProps} />
      </EscopeProvider>
    </>
  );
}

export default MyApp;
