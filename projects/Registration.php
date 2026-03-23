
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $contact = $_POST['contact'] ?? '';
    $username = $_POST['username'] ?? '';
    $password = $_POST['password'] ?? '';

    if ($name && $email && $contact && $username && $password) {
        $conn = new mysqli("localhost", "root", "", "shopdb");
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        $sql = "INSERT INTO registration (name, email, contact, username, password, Date_Time)
                VALUES ('$name', '$email', '$contact', '$username', '$password', current_timestamp())";

        if ($conn->query($sql) === TRUE) {
            echo "Registration successful!";
        } else {
            echo "Error: " . $conn->error;
        }

        $conn->close();
    } else {
        echo "Please fill out all fields.";
    }
}
?>




