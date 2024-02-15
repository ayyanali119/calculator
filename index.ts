import chalk from "chalk";
import inquirer from "inquirer";

async function calculator() {
    let continueTransaction = true;

    while (continueTransaction) {
        let firstNumbers = await inquirer.prompt({
            name: "firstNumber",
            type: "number",
            message: chalk.red.bold("Please Enter Your First Number"),
        });

        let operators = await inquirer.prompt({
            name: "operator",
            type: "list",
            message: chalk.yellowBright.bold("Please Select Function"),
            choices: ["+", "-", "*", "/"],
        });

        let secondNumbers = await inquirer.prompt({
            name: "secondNumber",
            type: "number",
            message: chalk.magentaBright.bold("Please Enter Your Second Number"),
        });

        const firstNumber = firstNumbers.firstNumber;
        const operator = operators.operator;
        const secondNumber = secondNumbers.secondNumber;

        switch (operator) {
            case "+":
                console.log(chalk.greenBright.bold(`Sum of ${firstNumber} and ${secondNumber} is : `), firstNumber + secondNumber);
                break;
            case "-":
                console.log(chalk.blueBright.bold(`Subtraction Of ${firstNumber} And ${secondNumber} Is : `), firstNumber - secondNumber);
                break;
            case "*":
                console.log(chalk.magentaBright.bold(`Multiplication Of ${firstNumber} And ${secondNumber} Is : `), firstNumber * secondNumber);
                break;
            case "/":
                console.log(chalk.yellowBright.bold(`Division Of ${firstNumber} And ${secondNumber} Is : `), firstNumber / secondNumber);
                break;
            default:
                console.log(chalk.red.bold("Invalid operator"));
        }

        const answer = await inquirer.prompt({
            name: "continueTransaction",
            type: "confirm",
            message: chalk.cyan.bold("Do you want to perform another transaction?"),
        })

        if (answer.continueTransaction) {
            continueTransaction = true;
        } else {
            continueTransaction = false;
            console.log(chalk.bold.italic.red(`Thank you for using the calculator.`))
            console.log(chalk.bold.italic.green(`Allah Hafiz`))
        }
    }
}

calculator();
