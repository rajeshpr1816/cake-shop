function registerUser() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const contact = document.getElementById('contact').value.trim();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    localStorage.setItem('cakeUsername', username);
    localStorage.setItem('cakePassword', password);

    if (name && email && contact && username && password) {
        alert("Registration successful! Sending data to server...");
        return true;
    } else {
        alert("Please fill out all fields.");
        return false;
    }
}
