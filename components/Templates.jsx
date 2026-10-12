export default function Templates() {
  return (
    <>
      <script type="text/html" id="modal-view-template" dangerouslySetInnerHTML={{
        __html: `
    <div class="contentHolder box vertical center flex1">
    </div>
`}} />

      <script type="text/html" id="terminal-window-bare-template" dangerouslySetInnerHTML={{
        __html: `
    <div class="terminal-window-holder box flex10 vertical transitionTransform slideOut">
      <div class="wrapper box vertical">
        <div class="toolbar box vertical center">
          <div class="controls box horizontal justify">
            <div class="box flex1">
              <div
                class="close"
                aria-label="<%- closeWindowText %>"
                data-tooltip="<%- closeWindowText %>">
              </div>
            </div>
            <div class="box flex1">
              <div class="minimize">
              </div>
            </div>
            <div class="box flex1">
              <div class="plus">
              </div>
            </div>
          </div>
          <div>
            <i class="icon-cog"></i>
            <%= title %>
          </div>
        </div>
        <div class="terminal-text">
          <p class="helperText">
            <%= text %>
          </p>
        </div>
        <div class="inside box flex1">
        </div>
      </div>
    </div>
`}} />

      <script type="text/html" id="terminal-window-template" dangerouslySetInnerHTML={{
        __html: `
    <div class="terminal-window box horizontal flex3 transitionAll">
    <div class="box flex3">
    </div>
    <div class="terminal-window-holder box flex10 vertical transitionTransform">
      <div class="wrapper box vertical">
        <div class="toolbar box vertical center">
          <div class="controls box horizontal justify">
            <div class="box flex1">
              <div
                class="close"
                aria-label="<%- closeWindowText %>"
                data-tooltip="<%- closeWindowText %>">
              </div>
            </div>
            <div class="box flex1">
              <div class="minimize">
              </div>
            </div>
            <div class="box flex1">
              <div class="plus">
              </div>
            </div>
          </div>
          <% if (title) { %>
            <div>
              <i class="icon-cog"></i>
              <span class="modal-title">
                <%= title %>
              </span>
            </div>
          <% } %>
        </div>

        <div class="inside">
        </div>
      </div>
    </div>

      <div class="box flex2">
      </div>
    </div>
`}} />

      <script type="text/html" id="level-dropdown-view" dangerouslySetInnerHTML={{
        __html: `
    <div class="box horizontal center levelDropdownTabWrapper">
      <% for (var i = 0; i < tabs.length; i++) { %>
        <% if (tabs[i].id === selectedTab) { %>
          <div class="levelDropdownTab" data-id="<%=tabs[i].id%>">
        <% } else { %>
          <div class="levelDropdownTab deselected" data-id="<%=tabs[i].id%>">
        <% } %>
          <span data-id="<%=tabs[i].id%>">
            <%= tabs[i].name %>
          </span>
        </div>
      <% } %>
    </div>
    <div class="levelDropdownLoadStatus" role="status" aria-live="polite"></div>
`}} />

      <script type="text/html" id="series-view" dangerouslySetInnerHTML={{
        __html: `
    <div class="displayName">
      <h3> <%= displayName %> </h3>
    </div>
    <p class="about">
      <%= about %>
    </p>
    <p class="levelInfo">
      <%= levelInfo %>
    </p>
    <div class="iconHolder box horizontal">
      <% for (var i = 0; i < ids.length; i++) { %>
        <a href="javascript:void(0)" class="levelIcon box center centerAlign vertical" id="levelIcon-<%=ids[i]%>" data-id="<%=ids[i]%>">
          <div class="index box" data-id="<%=ids[i]%>">
            <i class="icon-ok-circle" data-id="<%=ids[i]%>"></i>
            <i class="icon-star" data-id="<%=ids[i]%>"></i>
            <div class="indexNum" data-id="<%=ids[i]%>">
              <%= i + 1 %>
            </div>
          </div>
        </a>
      <% } %>
    </div>
`}} />

      <script type="text/html" id="git-demonstration-view" dangerouslySetInnerHTML={{
        __html: `
    <div class="demonstrationText box vertical">
      <div class="beforeText">
        <p>
          <%= beforeHTML %>
        </p>
      </div>

      <div class="command center">
        <p class="uiButton uiButtonYellow transitionOpacity">
        <!--
          we strip aboveAll since its just an
          implementation detail for the UI and confusing
        -->
          <%= command.replace(' --aboveAll', '') %>
        </p>
        <p class="transitionOpacity" target="reset">
            Reset Animation
        </p>
      </div>

      <div class="afterText transitionOpacity">
        <p>
          <%= afterHTML %>
        </p>
      </div>
    </div>

    <div class="visHolder box vertical flex1">
      <div class="visHolderInside box flex1">
      </div>
    </div>
`}} />

      <script type="text/html" id="general-button" dangerouslySetInnerHTML={{
        __html: `
      <%= buttonText %>
`}} />

      <script type="text/html" id="demonstration-builder" dangerouslySetInnerHTML={{
        __html: `
    <div class="insideBuilder box vertical">
    </div>
    <div class="buttons box horizontal center">
      <div class="uiButton testButton">
        Test View
      </div>
    </div>
`}} />

      <script type="text/html" id="multi-view-builder" dangerouslySetInnerHTML={{
        __html: `
    <div class="viewSoFar box vertical">
      <% if (!views.length) { %>
        <h3> You have no views specified yet! Add some with the buttons below </h3>
      <% } %>
      <% for (var i = 0; i < views.length; i++) { %>
        <div class="view box horizontal centerAlign justify">
          <div class="box horizontal">
            <div class="info">
              View
              #<%= i + 1 %>: <%= views[i].type %>
            </div>
          </div>
          <div class="singleViewButtons box horizontal">
            <button class="noStyle uiButton uiButtonRed box deleteButton" data-index="<%=i%>">
              Delete
            </button>
            <button class="noStyle uiButton uiButtonWhite box editButton" data-index="<%=i%>" data-type="<%= views[i].type %>">
              Edit
            </button>
            <button class="noStyle uiButton box testButton" data-index="<%=i%>">
              Test
            </button>
          </div>
        </div>
      <% } %>
    </div>
    <div class="buttons box horizontal center">
      <% for (var i = 0; i < supportedViews.length; i++) { %>
        <button class="noStyle uiButton addView uiButtonYellow" data-type="<%=supportedViews[i]%>">
        Add <%=supportedViews[i]%> View
        </button>
      <% } %>
    </div>
    <div class="controlsForView box horizontal center">
        <button class="noStyle uiButton uiButtonRed cancelView">
          Cancel
        </button>
        <% if (views.length) { %>
          <button class="noStyle uiButton uiButtonWhite testEntireView">
            Test Entire View
          </button>
          <button class="noStyle uiButton saveView">
            Save Entire View
          </button>
        <% } %>
   </div>
`}} />

      <script type="text/html" id="text-grabber" dangerouslySetInnerHTML={{
        __html: `
    <p class="helperText">
      <%= helperText %>
    </p>
    <textarea></textarea>
`}} />

      <script type="text/html" id="markdown-presenter" dangerouslySetInnerHTML={{
        __html: `
      <p class="helperText textAlignCenter">
        <%= previewText %>
      </p>
        <textarea><%= fillerText %></textarea>
`}} />

      <script type="text/html" id="markdown-grabber-view" dangerouslySetInnerHTML={{
        __html: `
    <div class="inputSide box vertical">
      <div class="markdownGrabberInput">
        <textarea><%= fillerText %></textarea>
      </div>
    </div>

    <div class="box vertical flex1">
      <p class="helperText textAlignCenter">
        <%= previewText %>
      </p>

      <div class="markdownGrabberPreview box flex1 vertical">
        <div class="insidePreview">
        </div>
      </div>
    </div>
`}} />

      <script type="text/html" id="modal-alert-template" dangerouslySetInnerHTML={{
        __html: `
    <h2>
      <%= title %>
    </h2>
    <p>
      <%= text %>
    </p>
`}} />

      <script type="text/html" id="interactive-rebase-template" dangerouslySetInnerHTML={{
        __html: `
    <div class="iRebaseDialog wrapper transitionAllSlow">
      <p>
        Rebasing <%= num %> Commits
      </p>
      <% if (solutionOrder && solutionOrder.length) { %>
        <p class="solutionText">
          For the solution, order the commits as
            <%= solutionOrder.join(', ') %>. You may need to omit or pick commits.
        </p>
      <% } %>
      <p class="helperText">
        (Drag and drop to re-order. Toggle the "Omit/Pick" button to omit or re-add a commit)
      </p>
      <div class="entryHolders">
        <ul class="rebaseEntries">

        </ul>
      </div>

      <div class="confirmCancel">
      </div>
    </div>
`}} />

      <script type="text/html" id="left-right-template" dangerouslySetInnerHTML={{
        __html: `
    <% if (!showLeft && lastNav ) { %>
      <div class="box right">
        <button class="noStyle"><i aria-hidden="true" class="icon-ok exit"></i><span class="visuallyHidden hoverLabel">OK</span></button>
      </div>
    <% } else { %>
      <% if (showLeft) { %>
        <div class="box left">
          <button class="noStyle"><i aria-hidden="true" class="icon-circle-arrow-left"></i><span class="visuallyHidden hoverLabel">Back</span></button>
      <% } else { %>
        <div class="box exit">
          <button class="noStyle"><i aria-hidden="true" class="icon-signout"></i><span class="visuallyHidden hoverLabel">Close</span></button>
      <% } %>
      </div>
      <div class="box right">
        <% if (!lastNav) { %>
          <button class="noStyle"><i aria-hidden="true" class="icon-circle-arrow-right"></i><span class="visuallyHidden hoverLabel">Next</span></button>
        <% } else { %>
          <button class="noStyle"><i aria-hidden="true"  class="icon-ok"></i><span class="visuallyHidden hoverLabel">OK</span></button>
        <% } %>
      </div>
    <% } %>
`}} />

      <script type="text/html" id="confirm-cancel-template" dangerouslySetInnerHTML={{
        __html: `
    <% if (disableCancelButton) { %>
      <span></span>
    <% } else { %>
      <button class="noStyle box cancelButton uiButton uiButtonRed">
        <%= cancel %>
      </button>
    <% } %>
    <button class="noStyle box confirmButton uiButton uiButtonYellow">
      <%= confirm %>
    </button>
`}} />

      <script type="text/html" id="interactive-rebase-entry-template" dangerouslySetInnerHTML={{
        __html: `
    <li id="<%= id %>" class="rebaseEntry transitionOpacity">
      <div class="wrapper">
        <i class="icon-align-justify"></i>
        <span class="idwrapper">
          <%= id %>
        </span>
        <button id="toggleButton" class="noStyle uiButton uiButtonPink">
          <span class="showWhenPicked">
            Click to Drop/Omit
          </span>
          <span class="showWhenNotPicked">
            Click to Include/Pick
          </span>
        </button>
      </div>
    </li>
`}} />
    </>
  );
}
