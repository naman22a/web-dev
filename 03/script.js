const input = document.getElementById('inputBox');
const buttons = document.querySelectorAll('button');

let string = '';
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerHTML) {
            case '=':
                string = eval(string);
                input.value = string;
                break;

            case 'AC':
                string = '';
                input.value = string;
                break;

            case 'DEL':
                string = string.substring(0, string.length - 1);
                input.value = string;
                break;

            default:
                string += e.target.innerHTML;
                input.value = string;
                break;
        }
    });
});
