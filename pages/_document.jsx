import { Html, Head, Main, NextScript } from 'next/document';
import Templates from '../components/Templates';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="author" content="Peter Cottle" />
        <meta property="og:title" content="Learn Git Branching" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="An interactive Git visualization tool to educate and challenge!" />
        <meta httpEquiv="content-language" content="en" />
        <link rel="icon" href="/assets/favicon.ico" type="image/x-icon" />
        <style dangerouslySetInnerHTML={{
          __html: `
            #appLoading {
              position: fixed;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              z-index: 1000000;
              display: flex;
              align-items: center;
              justify-content: center;
              background: #5cbcfc;
              opacity: 0;
              animation: appLoadingFadeIn 150ms ease 250ms forwards;
            }
            #appLoading::after {
              content: '';
              width: 28px;
              height: 28px;
              border-radius: 50%;
              border: 3px solid rgba(0, 0, 0, 0.2);
              border-top-color: #222;
              animation: appLoadingSpin 700ms linear infinite;
            }
            @keyframes appLoadingFadeIn {
              to { opacity: 1; }
            }
            @keyframes appLoadingSpin {
              to { transform: rotate(360deg); }
            }
            @media (prefers-reduced-motion: reduce) {
              #appLoading::after { animation: none; }
            }
            #appLoading[hidden] { display: none; }
            #appLoading.appLoading-visible { opacity: 1; animation: none; }
          `
        }} />
      </Head>
      <body>
        <div id="appLoading" role="status">
          <span className="visuallyHidden">Loading&hellip;</span>
        </div>
        <Templates />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
