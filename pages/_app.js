import '../styles/globals.css'

import '../css/antd.less'
import Header from '../components/Header'
function MyApp({ Component, pageProps }) {
  return <>
     <Header/>
  <Component {...pageProps} />
  </>
}

export default MyApp
