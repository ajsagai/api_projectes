$(document).ready(function () {
  $("#btnVerifyNIN").click(function () {
    //alert("I can verify! Lets go!!!!");
    var nin = $("#txtNIN").val();
    alert(nin);

    // var url = "https://reqbin.com/echo/post/json";
    var url = "http://localhost/corpsdata/search";
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      const apiresponse = document.getElementById("txtSurname");
      apiresponse.value = this.responseText;
      //   if (xhr.readyState === 4) {
      //     var arr = JSON.parse(data);

      //     console.log(xhr.status);
      //     console.log(xhr.responseText);
      //   }
    };
    xhr.open("POST", url);

    xhr.setRequestHeader("Accept", "application/json");
//xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhr.setRequestHeader("Content-type", "application/json", "text/javascript", "*/*; q=0.01")
//xhr.setRequestHeader("Content-Type", "application/json");
    // xhr.setRequestHeader("Accept", "application/json");
    // xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send("nin=12345");
    //    /*      var data = `{
    //           "NIN": 78912

    //         }`; */

    // xhr.send(data);
  });
});
