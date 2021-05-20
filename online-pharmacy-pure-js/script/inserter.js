function insertHTML(path, parent, position)
{            
  fetch(path)
  .then(function(response) {
    return response.text();
  })
  .then(function(body) {
    parent.insertAdjacentHTML(position, body);
  });
}