var fNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]; //FEMALE NAMES
var maleNames = ["Kwasi", "Kudwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]; //MALE NAMES



var akanName = function( year,month,day,gender) { //FUNCTION FOR CALCULATING THE AKAN NAME
    
    var day= new Date(`${year}-${month}-${day}`)
    if (gender === "Female") {
        return day && fNames[day.getDay()];
    } else {
        return day && maleNames[day.getDay()];
    }
}

//function to get the details entered on the form
$(document).ready(function() {
    $("form#form").submit(function(event) {
        event.preventDefault(); //prevents default reload!
        var year = parseInt($("#year").val()); //Same as document.getElementById ("year").value;
        var month = parseInt($("#month").val());
        var day = parseInt($("#date").val());
        var gender = $("input:radio[name=gender]:checked").val();
        var akanDay = akanName(year, month, day, gender);
        alert("Your akan name is: " + akanDay);
        //refresh page
        document.getElementById("form").reset();
    });
});
