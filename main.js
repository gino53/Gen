$(document).ready(function () {
    $('#result-display').hide();

    $('form').submit(function (event) {
        $('#result-display').show();
    });
});

const checkboxes = document.querySelectorAll('.form-check-input');
const submitButton = document.getElementById('btn-submit');

for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('change', toggleSubmitButton);
}

function toggleSubmitButton() {
    let isChecked = false;
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            isChecked = true;
            break;
        }
    }
    submitButton.disabled = !isChecked;
}

new ClipboardJS('.copy-btn', {
    container: document.querySelector('result')
});
