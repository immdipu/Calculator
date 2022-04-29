'use strict'
const history = document.getElementById('historyvalue');
const result = document.getElementById('resultvalue');
const operatorbtn = document.getElementsByClassName('operator');
const numberbtn = document.getElementsByClassName('number');

function historyfun() {

    return history.innerText;

}
function printhistory(num) {
    history.innerText = num;
}

function getoutput() {
    return result.innerText;
}

function printoutput(num) {
    if (num == " ") {
        result.innerText = num;
    }
    else {
        result.innerText = getFormattedNumber(num);
    }
}

function getFormattedNumber(num) {
    if (num == "-") {
        return " ";
    }
    let n = Number(num);
    let value = n.toLocaleString("en");
    return value;
}
function reversegetformattedNumber(num) {
    return Number(num.replace(/,/g, ''));
}

for (let i = 0; i < operatorbtn.length; i++) {
    operatorbtn[i].addEventListener('click', function () {
        if (this.id == "clear") {
            printhistory(" ");
            printoutput(" ")
        }

        else if (this.id == "backspace") {
            let output = reversegetformattedNumber(getoutput()).toString();
            if (output) {
                output = output.substr(0, output.length - 1)

                printoutput(output);
            }
        }

        else {
            let output = getoutput();
            let History = historyfun();
            if (output == "" && History != "") {

                if (isNaN(History[History.length - 1])) {
                    History = History.substr(0, History.length - 1);
                }
            }
            if (output != "" || History != "") {
                output = output == "" ? output : reversegetformattedNumber(output);
                History = History + output;
                if (this.id == "=") {
                    let Result = eval(History);
                    printoutput(Result);
                    printhistory("")
                }
                else {
                    History = History + this.id;
                    printhistory(History);
                    printoutput(" ")
                }

            }
        }


    })
};


for (let i = 0; i < numberbtn.length; i++) {
    numberbtn[i].addEventListener('click', function () {
        let output = reversegetformattedNumber(getoutput());
        if (output !== NaN) {
            output = output + this.id;
            printoutput(output);

        }
    });
};