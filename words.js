#! /usr/bin/env node
import inquirer from "inquirer";
const wordsAns = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Write paragraph/sentense to count the words: "
    }
]);
const words = wordsAns.Sentence.trim().split(" ");
console.log(words);
console.log(`Total words count = ${words.length}.`);
