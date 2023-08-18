// Function to clear the input field
function AC() {
    document.getElementById("input").value = "0";
}

// Function to add a number to the input field
function addnumber(number) {
    var value = document.getElementById("input").value;
    
    // If the input is currently "0", replace it with the new number
    if (value == "0") {
        document.getElementById("input").value = number;
    } else {
        // If the input length is less than 10, append the new number
        if (value.length < 10) {
            document.getElementById("input").value += number;
        }
    }
}

// Function to perform the calculation
function calc() {
    // Helper function to evaluate a mathematical expression
    function calculate(fn) {
        return new Function('return ' + fn)();
    }

    var value = document.getElementById("input").value;
    
    try {
        // Calculate the result of the expression and update the input field
        document.getElementById("input").value = calculate(value);
    } catch(err) {
        // Handle errors by displaying an alert and resetting the input field
        alert("An error occurred!");
        document.getElementById("input").value = "0";
    }
}
