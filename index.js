const form = document.querySelector('form');
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

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const length = parseInt(form.querySelector('#length').value);
    const includeLowercase = form.querySelector('#lowercase').checked;
    const includeUppercase = form.querySelector('#uppercase').checked;
    const includeNumbers = form.querySelector('#numbers').checked;
    const includeCharacters = form.querySelector('#characters').checked;

    if (length <= 0) {
        password.textContent = "Erreur : La longueur du mot de passe doit être supérieure à 0.";
    } else {
        const result = generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeCharacters);
        password.textContent = result;
    }
});