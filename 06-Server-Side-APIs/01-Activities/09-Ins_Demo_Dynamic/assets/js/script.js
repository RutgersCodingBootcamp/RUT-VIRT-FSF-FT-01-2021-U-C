var issueContainer = document.getElementById('issues');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  var requestUrl = 'https://api.github.com/repos/IBM/clai/issues?per_page=5';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        var userName = document.createElement('h3');
        var issueTitle = document.createElement('h4');
        var issueBody = document.createElement('p');
        userName.textContent = data[i].user.login;
        issueTitle.textContent = data[i].title;
        issueBody.textContent = data[i].body;
        issueContainer.append(userName);
        issueContainer.append(issueTitle);
        issueContainer.append(issueBody);
      }
    });
}
fetchButton.addEventListener('click', getApi);
