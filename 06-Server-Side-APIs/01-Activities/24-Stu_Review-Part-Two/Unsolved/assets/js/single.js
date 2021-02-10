var repoNameEl = document.querySelector('#repo-name');
var issueContainerEl = document.querySelector('#issues-container');
var limitWarningEl = document.querySelector('#limit-warning');

var getRepoName = function () {
  // Where is this value coming from?
  // TODO: Write your answer here
  var queryString = document.location.search;
  var repoName = queryString.split('=')[1];

  if (repoName) {
    repoNameEl.textContent = repoName;

    getRepoIssues(repoName);
  } else {
    // Under what condition will this run?
    // TODO: Write your answer here
    document.location.replace('./index.html');
  }
};

var getRepoIssues = function (repo) {
  var apiUrl = 'https://api.github.com/repos/' + repo + '/issues?direction=asc';

  fetch(apiUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        displayIssues(data);

        // What is this checking for? Under what condition will this be `true`?
        // TODO: Write your answer here
        if (response.headers.get('Link')) {
          displayWarning(repo);
        }
      });
    } else {
      document.location.replace('./index.html');
    }
  });
};

var displayIssues = function (issues) {
  // Is there a difference between this and `!issues.length`?
  // TODO: Write your answer here
  if (issues.length === 0) {
    issueContainerEl.textContent = 'This repo has no open issues!';
    return;
  }

  for (var i = 0; i < issues.length; i++) {
    var issueEl = document.createElement('a');
    issueEl.classList = 'list-item flex-row justify-space-between align-center';
    issueEl.setAttribute('href', issues[i].html_url);
    issueEl.setAttribute('target', '_blank');

    var titleEl = document.createElement('span');
    titleEl.textContent = issues[i].title;
    issueEl.appendChild(titleEl);

    var typeEl = document.createElement('span');

    if (issues[i].pull_request) {
      typeEl.textContent = '(Pull request)';
    } else {
      typeEl.textContent = '(Issue)';
    }

    issueEl.appendChild(typeEl);

    issueContainerEl.appendChild(issueEl);
  }
};

// What does this function do?
// TODO: Write your answer here
var displayWarning = function (repo) {
  limitWarningEl.textContent = 'To see more than 30 issues, visit ';

  var linkEl = document.createElement('a');
  linkEl.textContent = 'GitHub.com';
  linkEl.setAttribute('href', 'https://github.com/' + repo + '/issues');
  linkEl.setAttribute('target', '_blank');

  // Where does this appear on the page?
  // TODO: Write your answer here
  limitWarningEl.appendChild(linkEl);
};

getRepoName();
