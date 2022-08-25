//  Using... https://developer.mozilla.org/en-US/docs/Learn/Forms/Sending_forms_through_JavaScript -->

//const btn = document.querySelector('btnsubmit');
const btn = document.getElementById('btnsubmit');

function sendData(data) {
  console.log('Sending data');

  const XHR = new XMLHttpRequest();

  

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
  XHR.open("POST", "http://localhost/corpsdata/search");

  // Add the required HTTP header for form data POST requests
  //XHR.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  //XHR.setRequestHeader("Content-type", "application/json", "text/javascript", "*/*; q=0.01")
  XHR.setRequestHeader("Content-type", "application/json")
  // Finally, send our data.
  XHR.send({"NIN" : "12345"});
}

btn.addEventListener('click', () => {
    //alert ("working");
  //sendData({ test: 'ok' });
  sendData("NIN=12345");

  


})

