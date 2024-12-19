function calculator(num1, num2, operator) {
    switch (operator) {
        case '+':
            console.log(`The result of ${num1} + ${num2} is: ${num1 + num2}`);
            break;
        case '-':
            console.log(`The result of ${num1} - ${num2} is: ${num1 - num2}`);
            break;
        case '*':
            console.log(`The result of ${num1} * ${num2} is: ${num1 * num2}`);
            break;
        case '/':
            console.log(`The result of ${num1} / ${num2} is: ${num1 / num2}`);
            break;
        default:
            console.log('Incorrect Operation');
            break;
    }
}

calculator(5, 2, '+');
calculator(5, 2, '-');
calculator(5, 2, '*');
calculator(5, 2, '/');
calculator(5, 2, '&');