function handleLogin() {
    const userId = document.getElementById('userId').value;
    const password = document.getElementById('password').value;

    if (userId === "" || password === "") {
        alert("Please fill in both fields.");
        return;
    }

    // Simulate a login action
    alert(`User ID: ${userId}\nPassword: ${password}`);
}