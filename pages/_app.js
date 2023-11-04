import Layout from '../components/shared/layout/Layout'
import { useEffect } from 'react';
import '../styles/globals.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


  
function MyApp({ Component, pageProps }) {

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
  
  <Layout>
    <Component {...pageProps} />
  </Layout>
  )


}

export default MyApp
