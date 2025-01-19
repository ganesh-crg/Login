function handleLogin() {
    const userId = document.getElementById('userId').value;
    const password = document.getElementById('password').value;
 
    if (userId === "" || password === "") {
        alert("Please fill in both fields.");
        return;
    }
 
    // Validate credentials (add real validation logic here if needed)
    if (userId === "admin" && password === "1234") {
        // Redirect to the next page
        window.location.href = "nextPage.html";
    } else {
        alert("Invalid credentials. Please try again.");
    }
}

function OnbuttonClick() {
    alert("Button is clicked!");
}
