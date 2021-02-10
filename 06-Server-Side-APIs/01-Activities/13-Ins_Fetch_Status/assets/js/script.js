var requestUrl = 'https://api.github.com/orgs/nodejs/repos?per_page=5';

var responseText = document.getElementById('response-text');

function getApi(requestUrl) {
  fetch(requestUrl)
    .then(function (response) {})
    .then(function (data) {
      console.log(data);
    });
}

getApi(requestUrl);
