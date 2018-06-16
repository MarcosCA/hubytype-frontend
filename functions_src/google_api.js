import fetch from "node-fetch";

exports.handler = async (event, context) => {
  var queryString = event.queryStringParameters.q;
  var API_ENDPOINT = "https://hubtype-app.herokuapp.com/search?q=";
  API_ENDPOINT = API_ENDPOINT + queryString;
  return fetch(API_ENDPOINT)
    .then(response => response.json())
    .then(data => ({
      statusCode: 200,
      body: JSON.stringify(data)
    }))
    .catch(error => ({ statusCode: 422, body: String(error) }));
};