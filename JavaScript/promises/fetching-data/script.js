/*
if (window.XMLHttpRequest) {
  request = new XMLHttpRequest();
} else if (window.ActiveXObject) {
  try {
    request = new ActiveXObject("Msxml2.XMLHTTP");
  } catch (error) {
    try {
      request = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (error) {}
  }
}

request.open("GET", "https://url.com/some/url", true);
request.send(null);
*/

// that is too much code ,so we can use 3rd party labraries like axios and superagent
// we will use fetch like so

fetch("url.url.com/api", { mode: "cors" })
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

// ayeshakhaneae24974f5244d82a98d8a36e7b1f1ce
// 'https://api.giphy.com/v1/gifs/translate?api_key=YjM7dHf99KsUAbzht6XCSxJgz6TcC9tu=cats'
// of course we're searching for cats
