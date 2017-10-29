const WAIT_FOR_ACTION = 'action';
const WAIT_FOR_SECOND = 'second';
const WAIT_FOR_EQUALITY = 'equality';

const trueActions = ['mul', 'div', 'plus', 'min', 'eq'];

const actions = {
    ['print-7']: (prev) => {
        return prev + "7";
    },
    ['print-6']: (prev) => {
        return prev + "6"; 
    },
    ['eq']: (first, last, action) => {
        switch(action) {
            case 'div':
                return first/last;
        }
    }
}

class Calculator {
    constructor(color, calculatorId, buttonId, inputId) {
        this.color = color;
        this.status = WAIT_FOR_ACTION;
        this.currentAction = null;
        this.first = "";
        this.last = "";
        this.calculatorElement = document.getElementById(calculatorId);
        this.initButton = document.getElementById(buttonId);
        this.input = document.getElementById(inputId);
        this.toggleButtons(true);
        this.bindEvents();
    }

    toggleButtons(isDisabled) {
        const buttons = this.calculatorElement.querySelectorAll("button[type='button']");
        for(let i = 0; i < buttons.length; i++) {
            buttons[i].disabled = isDisabled;
        }
    }

    bindEvents() {
        this.initButton.addEventListener("click", () => {
            this.init();    
        });
    }

    initButtons() {
        const buttons = this.calculatorElement.querySelectorAll("button[type='button']");
        for(let i = 0; i < buttons.length; i++) {
            const value = buttons[i].getAttribute("data-value");
            buttons[i].innerHTML = value;
            buttons[i].addEventListener("click", (event) => {
                const button = event.target;
                const action = button.getAttribute("data-action");
                this.dispatch(action);
            })
        }
    }

    dispatch(action) {
        const calculateValue = actions[action];
        const status = this.status;

        const isAction = trueActions.indexOf(action) !== -1;

        switch(status) {
            case WAIT_FOR_ACTION:
                this.first = calculateValue(this.first);
                this.displayValue(this.first);
                if (isAction) {
                    this.status = WAIT_FOR_SECOND;
                } else {
                    this.currentAction = action;
                }
                break;
            case WAIT_FOR_SECOND:
                if (action !== 'eq') {
                    this.second = calculateValue(this.second);
                    this.displayValue(this.second);
                } else {
                    this.second = calculateValue(this.second);
                    this.displayValue(this.second);
                }
                break;
        }
    }

    displayValue(value) {
        console.log(this.first, this.second)
        this.input.value = value;
    }

    init() {
        this.toggleButtons(false);
        this.initButtons();
        this.calculatorElement.classList.remove("disabled");
    }
}

window.addEventListener("load", () => {
    window.calculator = new Calculator(
        "white", 
        "calculator", 
        "calculator-init",
        "calculator-input"
    );
});
