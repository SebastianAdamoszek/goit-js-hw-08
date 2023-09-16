import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const storageKey = 'feedback-form-state';

// Zapisuje stan formularza
const saveFormState = () => {
    const state = {
        email: emailInput.value,
        message: messageInput.value,
    };
    localStorage.setItem(storageKey, JSON.stringify(state));
};

// Odczytuje stan formularza
const loadFormState = () => {
    const savedState = localStorage.getItem(storageKey);
    if (savedState) {
        const state = JSON.parse(savedState);
        emailInput.value = state.email;
        messageInput.value = state.message;
    }
};

// Walidacja formularza
const isFormValid = () => {
    return emailInput.value.trim() !== '' && messageInput.value.trim() !== '';
};


// Wysłanie formularza
const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid()) {
        const data = {
            email: emailInput.value,
            message: messageInput.value,
        };

    console.log('Dane z formularza zostały wysłane:');
    console.log('Email:', data.email);
    console.log('Message:', data.message);
    
    // Czysczenie pamięci Local Storage
    localStorage.removeItem(storageKey);
    
    // Czyszczenie pól
    emailInput.value = '';
    messageInput.value = '';
    }
};

// Śledzenie i zapisywanie zmian w Local Storage z opóźnieniem
emailInput.addEventListener('input', throttle(saveFormState, 500));
messageInput.addEventListener('input', throttle(saveFormState, 500));

// Wczytywanie stanu formularza z Local Storage po odwierzeniu strony
window.addEventListener('load', loadFormState);

// Wysłanie formularza
form.addEventListener('submit', handleSubmit);

