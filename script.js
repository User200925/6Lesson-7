
const loginFrom = document.getElementById('loginFrom');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('submitButton');
const togglePassword = document.getElementById('togglePassword');

function check(){
    const username = usernameInput.value.trim()
    const password = passwordInput.value.trim()
    submitButton.disabled = !(username && password)
};

usernameInput.addEventListener('input', check);
passwordInput.addEventListener('input', check);
