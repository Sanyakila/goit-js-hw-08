import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";

const formRef = document.querySelector('.feedback-form');
    

formRef.addEventListener('submit', onFormSubmit);
formRef.addEventListener('input', throttle(onTextareaInput, 500));

function onFormSubmit(evt) {
    evt.preventDefault();

    const submitValue = {
        email: formRef.email.value,
        message: formRef.message.value,
    };
    console.log(submitValue);
    
    evt.target.reset();
    localStorage.removeItem(STORAGE_KEY);
    
};

function onTextareaInput(evt) {
    const email = formRef.email.value;
    const message = formRef.message.value;
    
    const inputValue = { email, message };
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(inputValue));
};

function populateTextarea () {
    const savedMessage = localStorage.getItem(STORAGE_KEY);

    if (savedMessage) {
        const parsedMessage = JSON.parse(savedMessage);
        const email = parsedMessage.email;
        const message = parsedMessage.message;
        formRef.email.value = email;
        formRef.message.value = message;
    }
}
populateTextarea();