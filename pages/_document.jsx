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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />
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
              background: #1e1e1e;
              opacity: 0;
              animation: appLoadingFadeIn 150ms ease 250ms forwards;
            }
            #appLoading::after {
              content: '';
              width: 32px;
              height: 32px;
              border-radius: 50%;
              border: 3px solid rgba(255, 255, 255, 0.15);
              border-top-color: #007acc;
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
