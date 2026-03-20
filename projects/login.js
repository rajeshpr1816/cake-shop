
function loginUser() {
      const inputUsername = document.getElementById('username').value;
      const inputPassword = document.getElementById('password').value;

      const storedUsername = localStorage.getItem('cakeUsername');
      const storedPassword = localStorage.getItem('cakePassword');

      if (inputUsername === storedUsername && inputPassword === storedPassword) {
        alert("Login successful! 🍰");
        window.location.href = "cake_shop.html";
      } else {
        alert("Invalid username or password.");
      }

      return false;
    }