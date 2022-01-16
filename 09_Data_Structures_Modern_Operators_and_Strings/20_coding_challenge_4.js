/*
Coding Challenge #4
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to insert the elements), and conversion will happen when the button is pressed.
Test data (pasted to textarea, including spaces):
underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure
Should produce this output (5 separate console.log outputs):
underscoreCase
firstName ✅
✅✅
someVariable
calculateAge ✅✅✅
✅✅✅✅
delayedDeparture ✅✅✅✅✅
Hints:
§ Remember which character defines a new line in the textarea 😉
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable
name conversion working 😉
§ This challenge is difficult on purpose, so start watching the solution in case
you're stuck. Then pause and continue!
Afterwards, test with your own test data!
    GOOD LUCK 😀*/

const textAreaContent = "underscore_case\n" +
    "first_name\n" +
    "Some_Variable\n" +
    "calculate_AGE\n" +
    "delayed_departure"
// Solution 1

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const text = document.querySelector('textarea').value;

const convertToCamelCase = (content) => {
    console.log(content);
    const contentWords = content.split("\n")
    for (const [contentWordKey, contentWordValue] of contentWords.entries()) {
        let [firstPartWord, lastPartWord] = contentWordValue.split('_');
        firstPartWord = firstPartWord.toLowerCase();
        lastPartWord = lastPartWord.toLowerCase();
        const camelCaseWord = [firstPartWord, lastPartWord.charAt(0).toUpperCase() + lastPartWord.slice(1, lastPartWord.length)].join("");
        let tick = "";
        console.log(`${camelCaseWord.padEnd(20)}${tick.padStart(contentWordKey + 1, '✅')}`);
    }
}

convertToCamelCase(textAreaContent)

// Solution 2
document.querySelector('button').addEventListener('click', function() {
    const text = document.querySelector('textarea').value;
    const rows = text.split("\n");
    for(const [i, row] of rows.entries()) {
        const[first, second] = row.toLowerCase().trim().split('_');
        const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`
        console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`)
    }
})

