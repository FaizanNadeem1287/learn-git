import Head from 'next/head';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined' && !window.__lgbInitialized) {
      window.__lgbInitialized = true;
      import('../src/js/app').then((appModule) => {
        // App auto-initializes on document.ready if isBrowser() is true.
        // We verify that bootstrap was triggered; if not, we trigger it.
        if (typeof window.$ !== 'undefined') {
          window.$(document).ready(() => {
            if (appModule && typeof appModule.bootstrap === 'function' && typeof appModule.init === 'function') {
              // already guarded inside app/index.js
            }
          });
        }
      });
    }
  }, []);

  return (
    <>
      <Head>
        <title>Learn Git Branching</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </Head>

      <noscript>
        <div style={{ zIndex: 1000000, background: 'red', color: 'white', position: 'absolute', top: 0, left: 0, height: '300px', width: '300px' }}>
          This application simulates a git repository in your browser, so you will need
          JS to use the app. Try enabling and refreshing the page -- Thanks!
        </div>
      </noscript>

      <div id="interfaceWrapper" className="box horizontal flex1">
        <div id="controls" className="box vertical flex1 visBackgroundColor">
          <div id="commandLineHistory" className="box vertical flex3">
            <div className="toolbar box vertical center">
              <div className="controls box horizontal justify">
                <div className="box flex1">
                  <div className="close"></div>
                </div>
                <div className="box flex1">
                  <div className="minimize"></div>
                </div>
                <div className="box flex1">
                  <div className="plus"></div>
                </div>
              </div>
              <div>
                <label htmlFor="commandTextField">
                  <i aria-hidden="true" className="icon-home"></i>
                  <span className="visuallyHidden">Terminal &ndash;</span>
                  <span className="vcs-mode-aware intl-aware" data-intl="learn-git-branching">
                    Learn Git Branching
                  </span>
                </label>
              </div>
            </div>
            <div id="levelToolbarMount"></div>

            <div id="terminal" className="box flex1 horizontal startAlign">
              <div id="commandDisplay" className="box vertical flex1"></div>
            </div>

            <div id="commandLineBar" className="box vertical flex0">
              <div id="prompt" className="">
                <span className="promptSign box">$</span>
                <span className="cursor box">&nbsp;</span>
                <p className="command"></p>
                <div id="shadow"></div>
              </div>
              <textarea
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck={false}
                id="commandTextField"
              ></textarea>
            </div>
          </div>
        </div>

        <div id="mainVisSpace" className="box flex2 horizontal transitionAll visBackgroundColor">
          <span className="modeText transitionOpacity gitMode">Git</span>
          <span className="modeText transitionOpacity hgMode">Hg</span>
        </div>

        <div id="goalPlaceholder" className="box flex1 visBackgroundColor" style={{ display: 'none' }}></div>
      </div>

      <div id="canvasHolder"></div>
      <div id="reactMount"></div>
      <div id="helperBarMount"></div>

      <a id="upsellImageLink" className="upsellImage" href="#" target="_blank" rel="noopener noreferrer" style={{ display: 'none' }}>
        <img id="upsellImage" src="" alt="" />
      </a>
      <div id="upsell" className="upsell" role="complementary" aria-label="Project promotion" style={{ display: 'none' }}>
        <button id="upsellDismiss" className="upsellDismiss noStyle" aria-label="Dismiss message">
          &times;
        </button>
        <div className="upsellContent">
          <p id="upsellText"></p>
        </div>
      </div>

      <a
        target="_blank"
        rel="noreferrer noopener"
        href="https://github.com/pcottle/learnGitBranching"
        className="github-corner"
        aria-label="View source on GitHub"
      >
        <svg
          viewBox="0 0 250 250"
          style={{ fill: '#151513', color: '#fff', position: 'absolute', top: 0, border: 0, right: 0, height: '7vmin' }}
          aria-hidden="true"
        >
          <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
          <path
            d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
            fill="currentColor"
            style={{ transformOrigin: '130px 106px' }}
            className="octo-arm"
          ></path>
          <path
            d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
            fill="currentColor"
            className="octo-body"
          ></path>
        </svg>
      </a>
    </>
  );
}
