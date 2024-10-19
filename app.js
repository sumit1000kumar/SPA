// app.js

// Initial page load content
const loadHome = () => {
    document.getElementById('content').innerHTML = `
        <h1>Welcome to Our SPA!</h1>
        <p>This is the Home Page.</p>
    `;
};

const loadAbout = () => {
    document.getElementById('content').innerHTML = `
        <h1>About Us</h1>
        <p>This is the About Page.</p>
    `;
};

const loadContact = () => {
    document.getElementById('content').innerHTML = `
        <h1>Contact Us</h1>
        <p>This is the Contact Page.</p>
    `;
};

const loadLogin = () => {
    document.getElementById('content').innerHTML = `
        <h1>Login</h1>
        <form id="login-form">
            <input type="text" placeholder="Username" required><br><br>
            <input type="password" placeholder="Password" required><br><br>
            <button type="submit">Login</button>
        </form>
    `;
};

const loadRegister = () => {
    document.getElementById('content').innerHTML = `
        <h1>Register</h1>
        <form id="register-form">
            <input type="text" placeholder="Username" required><br><br>
            <input type="email" placeholder="Email" required><br><br>
            <input type="password" placeholder="Password" required><br><br>
            <button type="submit">Register</button>
        </form>
    `;
};

const loadLogout = () => {
    document.getElementById('content').innerHTML = `
        <h1>Logged Out</h1>
        <p>You have been logged out successfully.</p>
    `;
};

// Event listeners for navigation
document.getElementById('home-link').addEventListener('click', loadHome);
document.getElementById('about-link').addEventListener('click', loadAbout);
document.getElementById('contact-link').addEventListener('click', loadContact);
document.getElementById('login-link').addEventListener('click', loadLogin);
document.getElementById('register-link').addEventListener('click', loadRegister);

// Set the initial content to Home
loadHome();

let isLoggedIn = false;

const updateUserActions = () => {
    const userActions = document.getElementById('user-actions');
    if (isLoggedIn) {
        userActions.innerHTML = '<a href="#" id="logout-link">Logout</a>';
        document.getElementById('logout-link').addEventListener('click', () => {
            isLoggedIn = false;
            loadLogout();
            updateUserActions();
        });
    } else {
        userActions.innerHTML = '<a href="#" id="login-link">Login</a> / <a href="#" id="register-link">Register</a>';
        document.getElementById('login-link').addEventListener('click', loadLogin);
        document.getElementById('register-link').addEventListener('click', loadRegister);
    }
};

// Example of handling login submission
document.addEventListener('submit', (event) => {
    event.preventDefault();
    if (event.target.id === 'login-form') {
        isLoggedIn = true;
        loadHome();
        updateUserActions();
    } else if (event.target.id === 'register-form') {
        alert('Registered successfully!');
        loadLogin();
    }
});

// Initialize the app
loadHome();
updateUserActions();
