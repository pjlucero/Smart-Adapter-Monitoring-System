document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Here you can add your authentication logic
    // For simplicity, let's assume the username is "admin" and password is "password"
    if (email === 'admin@gmail.com' && password === 'password') {
        // Redirect to dashboard page
        window.location.href = 'new.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
});
