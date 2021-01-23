var $ = function(id) {
    return document.getElementById(id);
};

var processEntry = function () {
    var cents = document.getElementById("cents").value;
        if (cents >= 0 && cents <= 99){
            makeChange (cents)
        else {
            alert("value is too high.")
        };

};

function makeChange (cents) {
   var quarters = parseInt(cents / 25);
   cents = cents % 25;
   var dimes = parseInt(cents / 10);
       cents = cents % 10;
   var nickels = parseInt(cents / 5);
       cents = cents % 5;
   var pennies = parseInt(cents / 1);

document.getElementById("quarters").value = "";
document.getElementById("dimes").value = "";
document.getElementById("nickels").value = "";
document.getElementById("pennies").value = "";
   }
};


window.onload = function(){
$("#calculate").addEventListener ("click", processEntry) };








