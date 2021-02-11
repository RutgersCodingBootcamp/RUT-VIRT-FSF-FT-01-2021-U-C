fetch(
  // Explain each parameter in comments below.
  'https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc'
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
// Parameter explanation.
// The per_page parameter will limit the results base per page.
// The state parameter represents the current state of the issue. It can be open, closed, or all.
// Sort will order the results based on the parameter given, the date created, updated, or comments.
// Direction will determine the order of the sort.
