document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    
    // Send request to SheetDB API
    fetch('https://sheetdb.io/api/v1/o3b4dnpud6z6j/search?email='+email+'&password='+password)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                loginSuccess();
            } else {
                loginFailure();
            }
        })
        .catch(error => {
            console.error('Error:', error);
            loginFailure();
        });
});

function loginSuccess() {
    document.getElementById('loginMessage').innerHTML = "Login successful!";
    // Redirect to dashboard page
    window.location.href = "Dashboard-2.html";
}

function loginFailure() {
    document.getElementById('loginMessage').innerHTML = "Invalid email or password!";
}

