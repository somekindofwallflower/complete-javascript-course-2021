/*
Coding Challenge 1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!

Your tasks:
    1. Create an arrow function 'calcAverage' to calculate the average of 3 scores

    2. Use the function to calculate the average for both teams

    3. Create a function 'checkWinner' that takes the average score of each team
    as parameters ('avgDolphins' and 'avgKoalas'), and then logs the winner
    to the console, together with the victory points, according to the rule above.
    Example: "Koalas win (30 vs. 13)"

    4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2.

    5. Ignore draws this time

Test data:
    Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49

    Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
   To calculate average of 3 values, add them all together and divide by 3
   To check if number A is at least double number B, check for A >= 2 * B.

    Apply this to the team's average scores 😉

GOOD LUCK 😀*/

// Test data 1
let dolphin_score_G1 = 44;
let dolphin_score_G2 = 23;
let dolphin_score_G3 = 71;

let koalas_score_G1 = 65;
let koalas_score_G2 = 54;
let koalas_score_G3 = 49;

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3
let dolphin_average = calcAverage(dolphin_score_G1, dolphin_score_G2, dolphin_score_G3);
console.log("Dolphin score average", dolphin_average)
let koalas_average = calcAverage(koalas_score_G1, koalas_score_G2, koalas_score_G3);
console.log("Koalas score average", koalas_average)
const checkWinner = (dolphin_team_result, koalas_team_result) => {
    if (dolphin_team_result >= koalas_team_result * 2) {
        console.log(`Dolphin win (${dolphin_team_result} vs. ${koalas_team_result})`)
    } else if (koalas_team_result >= dolphin_team_result * 2) {
        console.log(`Koalas win (${koalas_team_result} vs. ${dolphin_team_result})`)
    } else {
        console.log("No team wins");
    }
}

checkWinner(dolphin_average, koalas_average)

// Test data 2
dolphin_score_G1 = 85;
dolphin_score_G2 = 54;
dolphin_score_G3 = 41;

koalas_score_G1 = 23;
koalas_score_G2 = 34;
koalas_score_G3 = 27;

dolphin_average = calcAverage(dolphin_score_G1, dolphin_score_G2, dolphin_score_G3);
console.log("Dolphin score average", dolphin_average)
koalas_average = calcAverage(koalas_score_G1, koalas_score_G2, koalas_score_G3);
console.log("Koalas score average", koalas_average)

checkWinner(dolphin_average, koalas_average)
