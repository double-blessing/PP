document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const loginMessage = document.getElementById('login-message');
    const registerMessage = document.getElementById('register-message');

    const loginContainer = document.getElementById('login-container');
    const registerContainer = document.getElementById('register-container');
    const showRegister = document.getElementById('show-register');
    const showLogin = document.getElementById('show-login');

    const LOGIN_API_URL = 'https://api.servewithtabul.com/api/auth/login';
    const REGISTER_API_URL = 'https://api.servewithtabul.com/api/auth/register';

    showRegister.addEventListener('click', (e) => {
        e.preventDefault();
        loginContainer.style.display = 'none';
        registerContainer.style.display = 'block';
    });

    showLogin.addEventListener('click', (e) => {
        e.preventDefault();
        registerContainer.style.display = 'none';
        loginContainer.style.display = 'block';
    });

    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        clearMessage(loginMessage);

        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        if (!email || !password) {
            showMessage(loginMessage, 'Please fill in both email and password.', 'error');
            return;
        }

        const data = { email, password };

        try {
            const response = await fetch(LOGIN_API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || `HTTP error! Status: ${response.status}`);
            }

            console.log('Login Success:', result);
            showMessage(loginMessage, 'Login successful!', 'success');
        } catch (error) {
            console.error('Login Error:', error);
            showMessage(loginMessage, `Login failed: ${error.message}`, 'error');
        }
    });

    registerForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        clearMessage(registerMessage);

        const name = document.getElementById('register-name').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        const confirmPassword = document.getElementById('confirm-register-password').value;

        if (!email || !password || !name || !confirmPassword) {
            showMessage(registerMessage, 'Please fill in all fields.', 'error');
            return;
        }

        if (password !== confirmPassword) {
            showMessage(registerMessage, 'Passwords do not match.', 'error');
            return;
        }

        const data = { name, email, password };

        try {
            const response = await fetch(REGISTER_API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || `HTTP error! Status: ${response.status}`);
            }

            console.log('Registration Success:', result);
            showMessage(registerMessage, 'Registration successful! You can now log in.', 'success');
        } catch (error) {
            console.error('Registration Error:', error);
            showMessage(registerMessage, `Registration failed: ${error.message}`, 'error');
        }
    });

    function showMessage(element, message, type = 'info') {
        element.textContent = message;
        element.className = `message ${type}`;
    }

    function clearMessage(element) {
        element.textContent = '';
        element.className = 'message';
    }
});
