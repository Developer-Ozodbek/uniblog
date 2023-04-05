import '../styles/globals.css'
import "nprogress/nprogress.css";
import NProgress from "nprogress";
import { useEffect } from 'react';
import Router from 'next/router';

const App = ({ Component, pageProps }) => {

useEffect(() => {
  const handleRouteStart = () => NProgress.start();
  const handleRouteDone = () => NProgress.done();

  Router.events.on('routeChangeStart', handleRouteStart);
  Router.events.on('routeChangeComplete', handleRouteDone);
  Router.events.on('routeChangeError', handleRouteDone);

  return () => {
    Router.events.off('routeChangeStart', handleRouteStart);
    Router.events.off('routeChangeComplete', handleRouteDone);
    Router.events.off('routeChangeError', handleRouteDone);
  };
}, []);


  return (
    <Component {...pageProps} />
  )
}
export default App
