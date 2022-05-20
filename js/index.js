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
        app.displayInputText(app.buttonClickCount);

    },
    displayInputColor() {
    },
    displayInputText(count) {
        //add as value data-form-info
        const inputText = document.querySelector('.text');
        inputText.setAttribute('type', 'text');
        inputText.setAttribute('placeholder', `${count}`)
        
    }


};

app.init();