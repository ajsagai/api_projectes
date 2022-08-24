$(document).ready(function(){
    $("#btnFetch").click(function(){

//Get the City name
var cityname = $('#cityName').val();


$.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/city?name=' + cityname,
        headers: { 'X-Api-Key': 'qsxKuSVmqak05+CODEO6JQ==2x8SDxtdlT4Iuy2z'},
        contentType: 'application/json',
        success: function(result) {
            console.log(result);
            //Show the Results from API
            document.getElementById("cityTextName").innerHTML = "City: " + cityname.toUpperCase();
            document.getElementById("countryName").value= JSON.stringify(result[0].country);
            document.getElementById("population").value= JSON.stringify(result[0].population);
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });


    });



});
