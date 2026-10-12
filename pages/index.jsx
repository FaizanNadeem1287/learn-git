import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('terminal');
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined' && !window.__lgbInitialized) {
      window.__lgbInitialized = true;
      import('../src/js/app').then((appModule) => {
        if (typeof window.$ !== 'undefined') {
          window.$(document).ready(() => {
            // App automatically bootstraps via $(document).ready
          });
        }
      });
    }
  }, []);

  const runCommand = (cmd) => {
    if (typeof window !== 'undefined' && typeof window.runGitCommand === 'function') {
      window.runGitCommand(cmd);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      runCommand(searchInput.trim());
      setSearchInput('');
    }
  };

  return (
    <>
      <Head>
        <title>Learn Git Branching — VS Code Edition</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </Head>

      <noscript>
        <div style={{ zIndex: 1000000, background: '#f14c4c', color: 'white', position: 'absolute', top: 0, left: 0, height: '300px', width: '300px', padding: '20px' }}>
          This application simulates a git repository in your browser, so you will need
          JS to use the app. Try enabling and refreshing the page -- Thanks!
        </div>
      </noscript>

      {/* Main VS Code App Shell */}
      <div className="vscode-app-container">
        {/* Top Window Titlebar */}
        <header className="vscode-titlebar">
          <div className="vscode-titlebar-left">
            <div className="vscode-traffic-lights">
              <span className="dot red" title="Close" onClick={() => runCommand('clear')}></span>
              <span className="dot yellow" title="Minimize"></span>
              <span className="dot green" title="Maximize"></span>
            </div>
            <div className="vscode-menubar">
              <span onClick={() => runCommand('levels')}>Levels</span>
              <span onClick={() => runCommand('help')}>Help</span>
              <span onClick={() => runCommand('git status')}>Status</span>
              <span onClick={() => runCommand('undo')}>Undo</span>
              <span onClick={() => runCommand('reset')}>Reset</span>
              <span onClick={() => runCommand('clear')}>Clear</span>
            </div>
          </div>

          <div className="vscode-titlebar-center">
            <form onSubmit={handleSearchSubmit} style={{ width: '100%', margin: 0 }}>
              <div className="vscode-search-box">
                <i className="icon-search" style={{ color: '#858585' }}></i>
                <input
                  type="text"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  placeholder="learngitbranching — Type command (e.g. levels, git branch, help) and press Enter"
                  style={{
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    color: '#cccccc',
                    width: '100%',
                    fontFamily: 'inherit',
                    fontSize: '12px'
                  }}
                />
              </div>
            </form>
          </div>

          <div className="vscode-titlebar-right">
            <span className="vscode-badge">Git 2.45 (In-Memory)</span>
            <span className="vscode-badge" style={{ background: 'rgba(78, 201, 176, 0.2)', color: '#4ec9b0', borderColor: 'rgba(78, 201, 176, 0.4)' }}>
              Next.js 14
            </span>
          </div>
        </header>

        {/* Middle Workspace Row */}
        <div className="vscode-workspace-row">
          {/* Left Activity Bar */}
          <aside className="vscode-activitybar">
            <div className="vscode-activitybar-top">
              <div
                className={`vscode-activity-icon ${activeTab === 'terminal' ? 'active' : ''}`}
                title="Git CLI Terminal"
                onClick={() => {
                  setActiveTab('terminal');
                  if (typeof document !== 'undefined') {
                    const tf = document.getElementById('commandTextField');
                    if (tf) tf.focus();
                  }
                }}
              >
                <i className="icon-terminal"></i>
              </div>

              <div
                className="vscode-activity-icon"
                title="Interactive Level Map"
                onClick={() => runCommand('levels')}
              >
                <i className="icon-book"></i>
              </div>

              <div
                className="vscode-activity-icon"
                title="Git Source Control (Graph)"
                onClick={() => runCommand('git log')}
              >
                <i className="icon-code-fork"></i>
              </div>

              <div
                className="vscode-activity-icon"
                title="Undo Last Action"
                onClick={() => runCommand('undo')}
              >
                <i className="icon-undo"></i>
              </div>

              <div
                className="vscode-activity-icon"
                title="Reset Workspace"
                onClick={() => runCommand('reset')}
              >
                <i className="icon-refresh"></i>
              </div>

              <div
                className="vscode-activity-icon"
                title="Help & Commands Guide"
                onClick={() => runCommand('help')}
              >
                <i className="icon-question-sign"></i>
              </div>
            </div>

            <div className="vscode-activitybar-bottom">
              <div
                className="vscode-activity-icon"
                title="Toggle Git/Hg Mode"
                onClick={() => runCommand('mode')}
              >
                <i className="icon-random"></i>
              </div>
              <div
                className="vscode-activity-icon"
                title="Locale / Settings"
                onClick={() => {
                  if (typeof window !== 'undefined' && window.$) {
                    window.$('#helperBarMount').find('.intl-aware').click();
                  }
                }}
              >
                <i className="icon-cog"></i>
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="vscode-editor-main">
            {/* Editor Tabs Bar */}
            <div className="vscode-tabs-bar">
              <div
                className={`vscode-editor-tab ${activeTab === 'terminal' ? 'active' : ''}`}
                onClick={() => setActiveTab('terminal')}
              >
                <i className="icon-terminal" style={{ color: '#4ec9b0' }}></i>
                <span>git-terminal.sh</span>
              </div>
              <div
                className={`vscode-editor-tab ${activeTab === 'graph' ? 'active' : ''}`}
                onClick={() => setActiveTab('graph')}
              >
                <i className="icon-code-fork" style={{ color: '#007acc' }}></i>
                <span>commit-tree.visual</span>
              </div>
              <div style={{ flex: 1 }}></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingRight: '12px' }}>
                <span
                  title="Clear Terminal Output"
                  style={{ cursor: 'pointer', color: '#858585', fontSize: '13px' }}
                  onClick={() => runCommand('clear')}
                >
                  <i className="icon-trash"></i>
                </span>
                <span
                  title="Show Levels"
                  style={{ cursor: 'pointer', color: '#858585', fontSize: '13px' }}
                  onClick={() => runCommand('levels')}
                >
                  <i className="icon-list"></i>
                </span>
              </div>
            </div>

            {/* Core LearnGitBranching Interface */}
            <div id="interfaceWrapper" className="box horizontal flex1">
              <div id="controls" className="box vertical flex1 visBackgroundColor">
                <div id="commandLineHistory" className="box vertical flex3">
                  <div className="toolbar box vertical center">
                    <div className="controls box horizontal justify">
                      <div className="box flex1">
                        <div className="close" onClick={() => runCommand('clear')} title="Clear Terminal"></div>
                      </div>
                      <div className="box flex1">
                        <div className="minimize" title="Minimize"></div>
                      </div>
                      <div className="box flex1">
                        <div className="plus" title="New Session" onClick={() => runCommand('reset')}></div>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="commandTextField">
                        <i aria-hidden="true" className="icon-terminal"></i>
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
          </main>
        </div>

        {/* Bottom VS Code Status Bar */}
        <footer className="vscode-statusbar">
          <div className="vscode-statusbar-left">
            <div
              className="vscode-status-item"
              title="Current Git Branch"
              onClick={() => runCommand('git branch')}
            >
              <i className="icon-code-fork"></i>
              <span>main*</span>
            </div>
            <div
              className="vscode-status-item"
              title="Cloud Sync Status"
              onClick={() => runCommand('git status')}
            >
              <i className="icon-cloud"></i>
              <span>Synced</span>
            </div>
            <div
              className="vscode-status-item"
              title="Errors & Warnings"
            >
              <span>⊗ 0</span>
              <span>⚠ 0</span>
            </div>
          </div>

          <div className="vscode-statusbar-right">
            <div
              className="vscode-status-item"
              title="Git Engine Mode"
              onClick={() => runCommand('mode')}
            >
              <span>Git Simulation Engine</span>
            </div>
            <div className="vscode-status-item">
              <span>UTF-8</span>
            </div>
            <div className="vscode-status-item">
              <span>LF</span>
            </div>
            <div className="vscode-status-item" style={{ background: 'rgba(0,0,0,0.2)' }}>
              <span>Next.js 14 • React 18</span>
            </div>
            <div
              className="vscode-status-item"
              title="Help"
              onClick={() => runCommand('help')}
            >
              <i className="icon-bell"></i>
            </div>
          </div>
        </footer>
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
    </>
  );
}
