const ageInput = document.getElementById('input-age');
const phoneInput = document.getElementById('input-phone');
const infoInput = document.getElementById('input-info');
const infoLabel = document.getElementById('input-info-label');
const submitButton = document.getElementById('button-submit');

const maxCharacters = 30;

submitButton.addEventListener('click', (e) => {
    
    let valid = true;
    
    // Validate age
    const age = parseInt(ageInput.value);
    if (isNaN(age) || age < 21 || age > 99) {
        ageInput.setCustomValidity('Age must be 21-99');
        valid = false;
    } else {
        ageInput.setCustomValidity('');
    }

    // Validate phone
    const phoneSanitized = phoneInput.value.replace(/\D/g, '');
    const phoneDigitized = parseInt(phoneSanitized);
    if (isNaN(phoneDigitized) || phoneDigitized.length < 7 || phoneDigitized.length > 11) {
        phoneInput.setCustomValidity('Invalid phone number');
        valid = false;
    } else {
        phoneInput.setCustomValidity('');
    }

    // Action the form
    if (!valid) {
        e.preventDefault();
        e.stopPropagation();
        document.querySelector('form').reportValidity();
    }
});

// Validate additional info box
infoInput.addEventListener('input', () => {

    const remainingCharacters = maxCharacters - infoInput.value.length;
    infoLabel.textContent = `Additional information: (${remainingCharacters} characters remaining)`;

    if (remainingCharacters < 0) {
        infoInput.setCustomValidity('Must be under 30 characters.');
    } else {
        infoInput.setCustomValidity('');
    }
});