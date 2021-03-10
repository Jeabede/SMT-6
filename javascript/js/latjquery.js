// $( document ).ready(function() {
//     console.log( "ready!" );
// });

$(function () {
    $("#isi").html("<h1>Belajar JQuery</h1>");

    $("#klik").click(function (e) { 
        e.preventDefault();
        alert("Belajar JQuery")
    });

    $("#isi").mouseleave(function () { 
        alert("Mouse Leave")
    });
});