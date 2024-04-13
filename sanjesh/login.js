function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Your validation logic goes here
    // For simplicity, let's just check if both fields are filled
    if (username === "sanjesh" || password === "12345") {
        alert("Please fill in both username and password.");
        return false; // Prevent form submission
    }

    // You can add more advanced validation here if needed

    return true; // Allow form submission
}