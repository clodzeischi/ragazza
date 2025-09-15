const fnInput = document.getElementById('input-fn');
const lnInput = document.getElementById('input-ln');
const a1Input = document.getElementById('input-a1');
const a2Input = document.getElementById('input-a2');
const cityInput = document.getElementById('input-city');
const stateInput = document.querySelector('select');
const zipInput = document.getElementById('input-zip');
const ageInput = document.getElementById('input-age');
const phoneInput = document.getElementById('input-phone');
const emailInput = document.getElementById('input-email');
const pwInput = document.getElementById('input-pw');
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
    if (isNaN(phoneSanitized) || phoneSanitized.length < 7 || phoneSanitized.length > 11) {
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
    } else {
        e.preventDefault();
        const form = document.querySelector('form');

        const formData = {
            firstName: fnInput.value,
            lastName: lnInput.value,
            address1: a1Input.value,
            address2: a2Input.value,
            city: cityInput.value,
            state: stateInput.value,
            zip: zipInput.value,
            phone: phoneInput.value,
            email: emailInput.value,
            password: pwInput.value,
            additional: infoInput.value,
            married: form.querySelector("input[name='married']:checked")?.id === 'input-mar-y',
            colors: Array.from(form.querySelectorAll("input[type='checkbox']:checked")).map(cb => cb.value)
        }

        console.log(formData);
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