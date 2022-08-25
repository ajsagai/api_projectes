//  Using... https://developer.mozilla.org/en-US/docs/Learn/Forms/Sending_forms_through_JavaScript -->

//const btn = document.querySelector('btnsubmit');
const btn = document.getElementById('btnsubmit');

function sendData(data) {
  console.log('Sending data');

  const XHR = new XMLHttpRequest();

  const urlEncodedDataPairs = [];

  // Turn the data object into an array of URL-encoded key/value pairs.
  for (const [name, value] of Object.entries(data)) {
    urlEncodedDataPairs.push(`${encodeURIComponent(name)}=${encodeURIComponent(value)}`);
  }

  // Combine the pairs into a single string and replace all %-encoded spaces to
  // the '+' character; matches the behavior of browser form submissions.
  const urlEncodedData = urlEncodedDataPairs.join('&').replace(/%20/g, '+');

  // Define what happens on successful data submission
  XHR.addEventListener('load', (event) => {
    alert('Yeah! Data sent and response loaded.');
  });

  // Define what happens in case of error
  XHR.addEventListener('error', (event) => {
    alert('Oops! Something went wrong.');
  });

  // Set up our request
 // XHR.open('POST', 'https://example.com/cors.php');
  XHR.open('POST', 'http://localhost/corpsdata/search');

  // Add the required HTTP header for form data POST requests
  XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  //XHR.setRequestHeader("Content-type", "application/json", "text/javascript", "*/*; q=0.01")
 // XHR.setRequestHeader("Content-type", "application/json")
  // Finally, send our data.
  XHR.send(urlEncodedData);
}

btn.addEventListener('click', () => {
    //alert ("working");
  //sendData({ test: 'ok' });
  sendData("NIN=12345");

  myJSON = {
    "NIN": "12345"
}
// var submitJSON = JSON.stringify(myJSON);
// sendData(submitJSON);
// alert("oh ... yea?")



})

