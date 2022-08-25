$(document).ready(function () {
  
  $("#btnsubmit").click(function () {
    alert("button...clicked!");

    var UserNIN = $("#txtNIN").val();
    //var currency = $("#buywallet-currency").val();
    // var credit = $("#buywallet-tocredit").val();

    //https://localhost:44307/login
    //http://localhost/corpsdata/search
    $.post(
      "http://localhost/corpsdata/search",
      {  "NIN": "12345"  },
      function (data, status) {
        // alert(data);
        var arr = JSON.parse(data);

        if (arr[0].msg.trim() === "Successful") {
          if (arr[10].status.trim() === "0") {
            //location.replace("vpay-screen.php")
            alert("NIN Successful!");
          } else if (arr[10].status.trim() === "1") {
            //location.replace("vbackofficee.php")
            alert("It didnt work o");
          }
        } else {
          alert("Either the password or username is incorrect. Try again ");
        }
      }
    );
  });
});
