
var akan = function(y, m, d, g) {
    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var maleNames = ["Kwasi", "Kudwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var d = new Date(y, --m, d);
    if (g === "Female") {
        return d && femaleNames[d.getDay()];
    } else {
        return d && maleNames[d.getDay()];
    }
}

$(document).ready(function() {
    $("form#form").submit(function(event) {
        event.preventDefault();
        var y = parseInt($("#year").val());
        var m = parseInt($("#month").val());
        var d = parseInt($("#date").val());
        var g = $("input:radio[name=gender]:checked").val();
        var result = akan(y, m, d, g);
        alert("Your akan name is: " + result);
        //refresh page
        document.getElementById("form").reset();
    });
});