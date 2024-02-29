document.addEventListener('DOMContentLoaded', function() {
    const display = document.querySelector('.display');
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if(button.classList.contains('calculate')) {
                try {
                    display.value = eval(display.value);
                } catch(error) {
                    display.value = 'Error';
                }
            } else if(button.classList.contains('operator')) {
                display.value += button.textContent;
            } else if(button.classList.contains('reset')) {
                display.value = '';
            } else {
                display.value += button.textContent;
            }
        });
    });
});
