const app = {
    //~VARIABLES
    body: document.querySelector('body'),
    buttonClickCount: 0,
    //~INITIALIZATION
    init() {
        console.log('Everything is working');

        app.handleButtonClick();
    },
    //~METHODS
    handleButtonClick() {
        const buttonElement = document.querySelector('button');
        buttonElement.addEventListener('click', app.toggleDarkMode);
    },
    toggleDarkMode(event) {
        event.preventDefault();

        app.body.classList.toggle('dark-mode');

        const formElement = document.getElementById('form');
        formElement.setAttribute('data-form-info', `${app.buttonClickCount++}`);
        //Controle
        app.displayInputText();
        app.displayInputCount(app.buttonClickCount);

    },
  
    displayInputText() {
        //add as value data-form-info
        const bodyElement = app.body.classList.contains('dark-mode');
        const inputsText = document.querySelectorAll('.text');

        if (bodyElement) {
            for (const inputText of inputsText) {
                inputText.setAttribute('type', 'text');
            }
        } else {
            for (const inputText of inputsText) {
                inputText.setAttribute('type', 'hidden');
            }
        }
    },
    displayInputCount(count) {

        const inputCounterElement = document.querySelector('.counter');
        const bodyElement = app.body.classList.contains('dark-mode');

        if (bodyElement) {
            inputCounterElement.setAttribute('type', 'text');
        } else {
            inputCounterElement.setAttribute('type', 'hidden');
        }
 
        inputCounterElement.setAttribute('placeholder', `${count}`);
    },
    displayInputColor() { },


};

app.init();