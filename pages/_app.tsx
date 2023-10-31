import Head from 'next/head';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import HydrationWrapper from '@/shared-components/HydrationWrapper/HydrationWrapper';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Digital For All Challenge</title>
      </Head>
      <HydrationWrapper>
        <Component {...pageProps} />
      </HydrationWrapper>
    </div>
  );
}

export default MyApp;
