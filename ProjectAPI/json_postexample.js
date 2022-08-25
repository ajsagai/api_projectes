$(document).ready(function () {
    $("#btnsubmit").click(function () {
        //alert("Button clicked");
        var nin = $("#dtDate").val();
        //alert(nin);
    
              
    //alert(mydate);

    

    //JSON Get example
//I want to be sure the get weather forecast api from ASP.NET is working
const xhr = new XMLHttpRequest();
xhr.onload = function () {
  if (this.status === 200) {
    //Get the response
    try {
      //Put in a Javascript Object
      const resObj = JSON.parse(this.responseText);
      console.log(resObj);
      console.log(resObj[0]);
      console.log(resObj[0].date);
      var str2 = resObj[0].date;
      var str = JSON.stringify(resObj, null, 4);
     
   //Update the Fields

    document.getElementById("dtDate").value= JSON.stringify(resObj[0].date);
    document.getElementById("tempc").value= JSON.stringify(resObj[0].temperatureC);
    document.getElementById("tempf").value= JSON.stringify(resObj[0].temperatureF);
    document.getElementById("summary").value= JSON.stringify(resObj[0].summary);

    } catch (e) {
      console.warn("JSON Parse error");
    }

  } else {
    console.warn("Did not work....");
  }
};

xhr.open("get", "http://localhost/corpsdata/weatherforecast");

//xhr.open("post", "http://localhost/corpsdata/search");
xhr.setRequestHeader("Accept", "application/json");
//xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhr.setRequestHeader("Content-type", "application/json", "text/javascript", "*/*; q=0.01")
//xhr.setRequestHeader("Content-Type", "application/json");
xhr.send();
//xhr.send();


})

    });


