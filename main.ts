import inquirer from "inquirer";
import Choice from "inquirer/lib/objects/choice.js";
import Choices from "inquirer/lib/objects/choices.js";


let mybalance = 20000; //money in Doller apne hisab se rakhe
let pincode=1234; //pincode apne hisab se rakhe

console.log("your balance is 20000");
let pinAns = await inquirer.prompt(

   [ 
    {
        name:"pin",
        message : "enter your pin",
        type:"number"
    }
]
);

if (pinAns.pin==pincode){
    console.log("valid! \nproceed................");
    let operationAns= await inquirer.prompt([{
        name:"operation",
        message:"please select option",
        type:"list",
        choices: ["withdraw","check balance ","add money"]
    }]);
    console.log(operationAns);
    if (operationAns.operation==="withdraw"){
        let ammountAns=await inquirer.prompt(
            [
               
                {
                    name: "amount",
                    type:"list",
                    message: "Please select withdraw amount: ",
                    choices: ["1000","2000","3000","4000","5000","7000","10000","15000","20000"]
                    
                    
                    },

            ]
            
        );
        console.log(ammountAns.amount);
        mybalance-=ammountAns.amount;
        console.log("your balance is:" + mybalance);

    }
    else if(operationAns.operation==="check balance"){
        console.log("your balance is:" + mybalance);

    }
    else if(operationAns.operation==="add money"){
        let ammountAns=await inquirer.prompt(
            [
               
                {
                    name: "amount",
                    type:"number",
                    message: "Please select add amount: ",
                    
                    
                    
                    },

            ]
            
        );
       
        mybalance +=ammountAns.amount;
        console.log("your total balance is now:" + mybalance);

    }
}
else {
    console.log("invalid! \n  try again");
   
}
