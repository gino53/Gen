const checkPassword = document.querySelectorAll('.check-password');
const submitPassword = document.querySelector('#btn-submit-password');

for (let i = 0; i < checkPassword.length; i++) {
    checkPassword[i].addEventListener('change', toggleSubmitButton);
}

function toggleSubmitButton() {
    let isChecked = false;
    for (let i = 0; i < checkPassword.length; i++) {
        if (checkPassword[i].checked) {
            isChecked = true;
            break;
        }
    }
    submitPassword.disabled = !isChecked;
}

const formPassword = document.querySelector('#form-password');
const password = document.querySelector('#password');

function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeCharacters) {
    let characters = '';
    if (includeLowercase) characters += 'abcdefghijklmnopqrstuvwxyz';
    if (includeUppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeNumbers) characters += '0123456789';
    if (includeCharacters) characters += '!@#$%^&*()_+-={}[]|:;"<>,.?/~`';

    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

formPassword.addEventListener('submit', function (e) {
    e.preventDefault();
    const length = parseInt(formPassword.querySelector('#length').value);
    const includeLowercase = formPassword.querySelector('#lowercase').checked;
    const includeUppercase = formPassword.querySelector('#uppercase').checked;
    const includeNumbers = formPassword.querySelector('#numbers').checked;
    const includeCharacters = formPassword.querySelector('#characters').checked;

    if (length <= 0) {
        password.textContent = "Erreur : La longueur du mot de passe doit être supérieure à 0.";
    } else {
        const result = generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeCharacters);
        password.textContent = result;
    }
});

$(document).ready(function () {
    $('#result-password').hide();

    $('#form-password').submit(function (event) {
        $('#result-password').show();
    });
});
