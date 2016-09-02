// My Tip calc Script
// I learned about the on click, the style.display, and the innerHTML to do this.

// Calc tip function 
function calculateTip() {
    var billAmount = document.getElementById("billAmount").value;
    var serviceQuality = document.getElementById("serviceQuality").value;
    var totalPeeps = document.getElementById("totalPeople").value;
    
    // checking to see if the bill is empty or no service is selected
    if(billAmount === "" || serviceQuality === 0) {
       return window.alert("Please enter an amount!");
    }
    
    // Check to see if this input is empty or less than or equal to 1
    if(totalPeeps === "" || totalPeeps <= 1) {
        // assigning number of people to one always so it wait break the code
        // when we get the total. 
        totalPeeps = 1;
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }
    
    // Math part
    var total = (billAmount * serviceQuality) / totalPeeps;
    // this rounds the amount to 2 decimal places
    total = Math.round(total * 100) / 100;
    // this bizarre add on keeps the amount to 2 decimal places always
    total = total.toFixed(2);
    
    // Display the Tip!
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
    
}

// Hides tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

// Click button calls custom function
document.getElementById("calculate").onclick = function() {
    calculateTip();
};