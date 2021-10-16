// *************** Coding Challenge #3 *******************************

// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
//   Your tasks:
// 1. Calculate the average score for each team, using the test data below

// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)

// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks 😉

// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy

// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
// GOOD LUCK 😀

// Dolphin team 3 games scores
let dolphinScoreG1 = 96;
let dolphinScoreG2 = 108;
let dolphinScoreG3 = 89;

// Korals team 3 games scores
let koralsScoreG1 = 88;
let koralsScoreG2 = 91;
let koralsScoreG3 = 110;

// Calculate the avarage of games score for each team
let dolphinAverageScore = (dolphinScoreG1 + dolphinScoreG2 + dolphinScoreG3) / 3;
let koralsAverageScore = (koralsScoreG1 + koralsScoreG2 + koralsScoreG3) / 3;

console.log('Dolphin average score', dolphinAverageScore);
console.log('Korals average score', koralsAverageScore);

if (dolphinAverageScore > koralsAverageScore) {
    console.log("The winner of the trophy is gymnastic team Dolphin");
} else if (koralsAverageScore > dolphinAverageScore) {
    console.log("The winner of the trophy is gymnastic team Korals");
} else {
    console.log("We have two winners since both gymnastic teams achieve the save average score during the games");
}

// BONUS 1
dolphinScoreG1 = 97;
dolphinScoreG2 = 112;
dolphinScoreG3 = 101;

koralsScoreG1 = 109;
koralsScoreG2 = 95;
koralsScoreG3 = 123;

const minimumScore = 100;

dolphinAverageScore = (dolphinScoreG1 + dolphinScoreG2 + dolphinScoreG3) / 3;
koralsAverageScore = (koralsScoreG1 + koralsScoreG2 + koralsScoreG3) / 3;

console.log('Dolphin average score', dolphinAverageScore);
console.log('Korals average score', koralsAverageScore);

if (dolphinAverageScore > koralsAverageScore && dolphinAverageScore >= minimumScore) {
    console.log("The winner of the trophy is gymnastic team Dolphin");
} else if (koralsAverageScore > dolphinAverageScore && koralsAverageScore >= minimumScore) {
    console.log("The winner of the trophy is gymnastic team Korals");
} else {
    console.log("We have two winners since both gymnastic teams achieve the save average score during the games");
}

// BONUS 2
dolphinScoreG1 = 97;
dolphinScoreG2 = 112;
dolphinScoreG3 = 101;

koralsScoreG1 = 109;
koralsScoreG2 = 95;
koralsScoreG3 = 106;

dolphinAverageScore = (dolphinScoreG1 + dolphinScoreG2 + dolphinScoreG3) / 3;
koralsAverageScore = (koralsScoreG1 + koralsScoreG2 + koralsScoreG3) / 3;

console.log('Dolphin average score', dolphinAverageScore);
console.log('Korals average score', koralsAverageScore);

if (dolphinAverageScore > koralsAverageScore && dolphinAverageScore >= minimumScore) {
    console.log("The winner of the trophy is gymnastic team Dolphin");
} else if (koralsAverageScore > dolphinAverageScore && koralsAverageScore >= minimumScore) {
    console.log("The winner of the trophy is gymnastic team Korals");
} else if(dolphinAverageScore === koralsAverageScore && dolphinAverageScore >= minimumScore){
    console.log(`We have two winner since both gymnastic teams achieve the save average result during the games and the score is greater than minimum score ${minimumScore}`);
} else {
    console.log(`We have no winner, both gymnastic teams achieve the save average result during the games but their score is less than ${minimumScore}`);
}
