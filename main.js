#! /usr/bin/env node
import inquirer from "inquirer";
let mybalance = 20000; // Initial balance
let pincode = 1234; // Pincode
console.log("Your balance is $20000");
let pinAns = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin",
        type: "number"
    }
]);
if (pinAns.pin === pincode) {
    console.log("Valid! \nProceeding................");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select an option",
            type: "list",
            choices: ["withdraw", "check balance", "add money"]
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "list",
                message: "Please enter the amount to withdraw: ",
                choices: ["1000", "4000", "6000", "12000", "15000", "20000", "26000"],
            }
        ]);
        if (amountAns.amount > mybalance) {
            console.log("Insufficient balance");
        }
        else {
            mybalance -= amountAns.amount;
            console.log("Withdrawal successful. Your balance is: $" + mybalance);
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log("Your balance is: $" + mybalance);
    }
    else if (operationAns.operation === "add money") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Please enter the amount to add: ",
            }
        ]);
        mybalance += amountAns.amount;
        console.log("Your total balance is now: $" + mybalance);
    }
}
else {
    console.log("Invalid pin! Please try again.");
}
