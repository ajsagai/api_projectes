$(document).ready(function () {
  //alert("Give me my Money!!!!");
  $("#btnLogin").click(function () {
    alert("I can verify! Let go!!!!");

    var amount = $("#buywallet-amount").val();
    var currency = $("#buywallet-currency").val();
    var credit = $("#buywallet-tocredit").val();

    // Syntax: $.post(URL,data,callback);
    //https://localhost:44307/login
    $.post(
      "https://localhost:44307/login",
      { Username: uname, Password: txtPwd },
      function (data, status) {
        // alert(data);
        var arr = JSON.parse(data);

        if (arr[0].msg.trim() === "Successful") {
          if (arr[10].status.trim() === "0") {
            location.replace("vpay-screen.php");
          } else if (arr[10].status.trim() === "1") {
            location.replace("vbackofficee.php");
          }
        } else {
          alert("Either the password or username is incorrect. Try again ");
        }
      }
    );
  });
});
