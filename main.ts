#! /usr/bin/env node

// importing necessary modules
import inquirer from "inquirer"
import chalk from "chalk"

// condition to control the while loop
let condition = true;

// welcome message display using chalk
console.log(chalk.blueBright("Welcome to Letters and Words counter App\n"));

// main loop to keep the program running based on user input
while(condition){
    // prompting user for paragraph input and choice of counting
    let userInput = await inquirer.prompt(
        [
            {
                type: "input",
                name: "para",
                message: chalk.redBright("Enter your paragraph to count letters and words in it!")
            },
            {
                type: "list",
                name: "ask",
                message: chalk.red("What do you want to count"),
                choices: ['1. Letters', '2. Words', '3. Both Letters and words' ]
            },
        ]
    );
    // Destructuring userInput to get para and ask values
    let {para,ask} = userInput;

    // check if the paragraph input is empty
    if(para.length === 0) emptyFun();

    // call respective functions based on user's choice
    if(ask === "1. Letters") letterFun();
    
    if (ask === '2. Words')  wordFun()
        
    if (ask === '3. Both Letters and words') bothFun();
      
    // function to handle empty input
    function emptyFun(){
        console.log(chalk.green("Your input is empty! you have to write something\n"))
    }
    // function to count letters in the paragraph
    function letterFun(){
        const letterWithoutSpace = para.replace(/\s/g,"");
        const letterCount = letterWithoutSpace.length;
        console.log(chalk.green('Your total number of letters is: ' + letterCount + "\n"));
    }
    // function to count words in the paragraph
    function wordFun(){
        const wordArray =  para.split(" ");
        const wordCount = wordArray.length;
        console.log(chalk.green('Total number of words is: ' + wordCount + "\n"));  
    }
    // function to count both letters and words in the paragraph
    function bothFun(){
        letterFun();
        wordFun();
    }
    // prompting user if they want to count more
    let countMore = await inquirer.prompt(
        {
            type: "confirm",
            name: "More",
            message: chalk.red("Do you want to count more?"),
            default: false
        }
    );
    // if user choose not to count more, exit the loop
    if(countMore.More === false){
        condition = false;
        console.log(chalk.green("Thank you for using this app!\n"));
    }
}