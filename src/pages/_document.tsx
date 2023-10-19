/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/inline-script-id */
/* eslint-disable @next/next/no-sync-scripts */
import { getCssText } from '@qoruz/stitches';
import { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';
export default function Document() {
  // useEffect(() => {
  //   loadClarity();
  // });
  return (
    <Html lang='en'>
      <Head>
        <style
          id='stitches'
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
        <link
          rel='stylesheet'
          href='https://use.typekit.net/zwx2rjz.css'
        ></link>
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css'
        />
        <Script
          strategy='lazyOnload'
          defer
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "bfb2w2l1yd");`,
          }}
        ></Script>
      </Head>

      <body>
        <noscript>
          <iframe
            src='https://www.googletagmanager.com/ns.html?id=GTM-TXMPCJJ'
            height='0'
            width='0'
          ></iframe>
        </noscript>

        <Main />
        <NextScript />
        <Script
          strategy='afterInteractive'
          type='text/javascript'
          src='https://my.hellobar.com/06a49264a298b17f34bd4263058446f1c274135e.js'
          async
          defer
        ></Script>
      </body>
    </Html>
  );
}
