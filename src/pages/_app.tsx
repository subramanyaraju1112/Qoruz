// import { globalStyles } from '@qoruz/stitches';
import Layout from '@qoruz/components/layout/Layout';
import Header from '@qoruz/pages/header/header';
import useWOW from '@qoruz/utils/wowInit';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import './svg.css';
import './globals.scss';

const paths = ['/paid-collaboration', '/qoruz-business-suite'];

function MyApp({ Component, pageProps }: AppProps) {
  // globalStyles();
  const router = useRouter();
  const [dontMakeSticky, setDontMakeSticky] = useState(true);

  useEffect(() => {
    if (paths.includes(router.pathname)) {
      setDontMakeSticky(false);
    } else {
      setDontMakeSticky(true);
    }
    window.addEventListener('popstate', function () {
      // Refresh the page
      location.reload();
    });
  }, [router.pathname]);

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);
  const [isPinned, setIsPinned] = useState(false);
  const [height, setHeight] = useState(0);
  useWOW();

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementsByClassName('header');
      if (window.scrollY > 65 && window.scrollY < height) {
        header[0].classList.add('hide-header');
        header[0].classList.remove('show-header');
        header[0].classList.remove('fixed-header');
      } else if (window.scrollY < 72 && window.scrollY < height) {
        setIsPinned(false);
        header[0].classList.add('show-header');
        header[0].classList.remove('hide-header');
        header[0].classList.remove('fixed-header');
      } else if (window.scrollY > height) {
        dontMakeSticky && header[0].classList.add('fixed-header');
        header[0].classList.remove('hide-header');
        setIsPinned(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [height]);

  const getInnerHeight = (height: number) => {
    setHeight(window.innerHeight - height);
  };

  return (
    <>
      <Layout>
        <div className='the-main'>
          <Header pinned={isPinned} height={getInnerHeight} />
        </div>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
