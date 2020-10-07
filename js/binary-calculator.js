function showOperation(event) {
    let btn = event.target;
    let entry = btn.innerHTML;

    document.getElementById('res').innerHTML += entry;
}

function clearEntries() {
    document.getElementById('res').innerHTML = '';
}

function showResult() {
    let expression = document.getElementById('res').innerHTML;
    let operator;

    if (expression.includes('+')) {
        operator = '+';
    } else if (expression.includes('-')) {
        operator = '-';
    } else if (expression.includes('*')) {
        operator = '*';
    } else {
        operator = '/';
    }

    let operands = expression.split(operator);

    let operand1 = parseInt(operands[0], 2);
    let operand2 = parseInt(operands[1], 2);
    console.log(operand1 + operator + operand2);

    let result;

    if (operator != '/') {
        result = eval(operand1 + operator + operand2).toString(2);
    } else {
        result = Math.floor(eval(operand1 + operator + operand2)).toString(2);
    }

    document.getElementById('res').innerHTML = result;
}

document.getElementById('btn0').addEventListener('click', showOperation);
document.getElementById('btn1').addEventListener('click', showOperation);
document.getElementById('btnSum').addEventListener('click', showOperation);
document.getElementById('btnSub').addEventListener('click', showOperation);
document.getElementById('btnMul').addEventListener('click', showOperation);
document.getElementById('btnDiv').addEventListener('click', showOperation);
document.getElementById('btnClr').addEventListener('click', clearEntries);
document.getElementById('btnEql').addEventListener('click', showResult);
