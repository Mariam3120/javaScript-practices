// 1.1   isValidScore(score)============================
// Returns true if score is a number between 0 and 100 (inclusive), false otherwise.
//  The function must also handle falsy inputs — if score is falsy (null, undefined, 0 treated carefully, empty string),
// log a warning and return false.

// function isValidScore(score){
//   if(score === null || score === undefined || score ===""){
//     console.warn("Warning Message");
//     return false;
//   }else if(typeof score !== "number"){
//     return false;

//   }else if(score >= 0 && score <= 100){
//      return true;

//   }
//   return false;
// }

// We don't use a generic falsy check because 0 is falsy in JavaScript,
// but 0 is still a valid exam score.

//უკეთესი ვარიანტი
function isValidScore(score) {
  if (score === null || score === undefined || score === "") return false;
  if (typeof score !== "number") return false;
  if (score < 0 || score > 100) return false;

  return true;
}

// console.log(isValidScore(85));
// console.log(isValidScore(101));
// console.log(isValidScore(-5));
// console.log(isValidScore(null));
// console.log(isValidScore(0));
// console.log(isValidScore(200));

// isValidScore(85);          // true მოსალოდნელი შედეგები
// isValidScore(101);         // false
// isValidScore(-5);          // false
// isValidScore(null);        // Warning: no score provided. → false
// isValidScore(0);           // true  (0 is a valid score!)

// 1.2   getLetterGrade(score, passingScore = 50)=============================
// Returns the letter grade as a string, based on the scale below. The passingScore parameter sets the D/F boundary and defaults to 50.

// If the score is not valid (use isValidScore), return "Invalid".

function getLetterGrade(score, passingScore = 50) {
  if (!isValidScore(score)) {
    return "Invalid";
  } //აქ ხდება თავის დაზღვევა რომ 0-დან 100მდე იქნება მარტო score ამიტომ if-ში აღარაა საჭირო &&
  if (score >= 90) return "A";
  if (score >= 75) return "B";
  if (score >= 60) return "C";
  if (score >= passingScore) return "D";

  return "F";
}

// console.log(getLetterGrade(92));          // "A"
// console.log(getLetterGrade(58));          // "D"  (default passing = 50)
// console.log(getLetterGrade(58, 60));      // "F"  (custom passing = 60)
// console.log(getLetterGrade(110));         // "Invalid"

// 1.3   The == vs === trap =============================
// A score arrives from a web form as the string "85". Add this test to your file and explain the output in a comment:
// const formScore = "85";
// console.log(formScore == 85);    // ?
// console.log(formScore === 85);   // ?
// console.log(isValidScore(formScore));  // does your function handle this correctly?
// In your comment: explain which operator you should use in isValidScore and why.
//  Then fix isValidScore if it does not handle the string input correctly.

/*
== performs type coercion, so "85" becomes 85 → true
=== does not convert types, so string !== number because types are different → result is false

isValidScore handles string input correctly because it converts
the value using Number() before validation.
*/
function isValidScore(score) {
  if (score === null || score === undefined || score === "") return false;

  const parsedScore = Number(score);
  if (Number.isNaN(parsedScore)) return false;

  if (parsedScore < 0 || parsedScore > 100) return false;

  return true;
}

// console.log(isValidScore(85));      // true
// console.log(isValidScore(0));       // true
// console.log(isValidScore(100));     // true

// console.log(isValidScore(101));     // false
// console.log(isValidScore(-5));      // false

// console.log(isValidScore("85"));    // true
// console.log(isValidScore("abc"));   // false

// console.log(isValidScore(null));    // false
// console.log(isValidScore(undefined)); // false
// console.log(isValidScore(""));      // false

//======================================================
// Part 2 — Score Calculators
//   Arrow Functions       Default Parameters       Operators
// Write three calculator functions. All three must be arrow functions stored in const variables.
// 2.1   calculateAverage(s1, s2, s3, s4 = 0, count = 3)
// Calculates the average of up to four scores.
//  The fourth score defaults to 0 and count defaults to 3,
// allowing the function to work correctly with either three or four scores.

// calculateAverage(70, 80, 90);             // (70+80+90) / 3 = 80.00
// calculateAverage(70, 80, 90, 100, 4);     // (70+80+90+100) / 4 = 85.00

// Why not just always divide by 4? If you pass only three scores, the fourth defaults to 0,
// which would incorrectly lower the average. The count parameter solves this.
// Explain this in a comment in your code.

//count -ს ვწერთ რადგან თუ მხოლოდ 3 ქულას გადავცემთ, მეოთხე ავტომატურად 0-ად ჩაითვლება და თუ ყოველთვის 4-ზე გავყოთ,
// საშუალო არასწორი იქნება. count პარამეტრი კი საშუალებას გვაძლევს სწორად გავყოთ ქულების რაოდენობაზე, რაც გადმოვეცით ფუნქციას.
const calculateAverage = (s1, s2, s3, s4 = 0, count = 3) => {
  return (s1 + s2 + s3 + s4) / count;
};

// console.log(calculateAverage(70, 80, 90));             // (70+80+90) / 3 = 80.00
// console.log(calculateAverage(70, 80, 90, 100, 4));     // (70+80+90+100) / 4 = 85.00

// 2.2   calculateWeightedScore(exam, homework, bonus = 0)
// Returns the final weighted score using these weights: exam counts 60%, homework counts 40%,
// and bonus points are added on top (not weighted). Round the result to two decimal places.

const calculateWeightedScore = (exam, homework, bonus = 0) => {
  const weightedScore = 0.6 * exam + 0.4 * homework + bonus;
  return Number(weightedScore.toFixed(2));
};

// console.log(calculateWeightedScore(80, 90));         // 0.6*80 + 0.4*90 + 0 = 84.00
// console.log(calculateWeightedScore(80, 90, 5));      // 84 + 5 = 89.00
// console.log(calculateWeightedScore(55, 70, 0));      // 0.6*55 + 0.4*70 = 61.00

// 2.3   isEligibleForRetake(score, attendance)
// A student is eligible for a retake exam if their score is below 60 AND their attendance is at or above 75 (percent).
//  Returns a boolean.

// Write the condition using a single return statement with logical operators. No if/else.

const isEligibleForRetake = (score, attendance) => {
  return score < 60 && attendance >= 75;
};

// console.log(isEligibleForRetake(45, 80));   // true   (failed, but attended enough)
// console.log(isEligibleForRetake(45, 60));   // false  (failed, but too many absences)
// console.log(isEligibleForRetake(75, 80));   // false  (passed — no retake needed)

// Part 3 — Score Processor =========================================
//   Callbacks       Higher-Order Functions       Function Expressions
// Write two functions that accept other functions as arguments.
// This pattern lets you apply any transformation or check to a score without rewriting the core logic.

// 3.1   processScore(score, callback)
// A function expression (not an arrow function, not a declaration) that takes a score and a callback.
//  It validates the score first using isValidScore — if invalid, it prints an error and returns null.
//  If valid, it calls the callback with the score and returns the result.

// const processScore = function(score, callback) {
//   // validate, then apply callback
// };

const processScore = function (score, callback) {
  if (!isValidScore(score)) {
    console.warn("Invalid score provided.");
    return null;
  } else {
    return callback(score);
  }
};

// // Test with different callbacks:
// console.log(processScore(78, getLetterGrade));
// // "B"

// console.log(processScore(78, score => score >= 60 ? "Pass" : "Fail"));
// // "Pass"

// console.log(processScore(78, score => Math.round(score * 1.1)));
// // 86  (10% bonus applied)

// console.log(processScore(110, getLetterGrade));
// // Error: invalid score. → null

// 3.2   applyToAll(s1, s2, s3, callback)
// Takes three scores and a callback. Calls processScore on each score and prints the result for each.
//  Write this as a function declaration.

// Notice that applyToAll does not know — and does not care — what the callback does.
// It could format the score, classify it, transform it, or anything else.
// This is the point of higher-order functions: the logic stays separate from the structure.

function applyToAll(s1, s2, s3, callback) {
  const result1 = processScore(s1, callback);
  const result2 = processScore(s2, callback);
  const result3 = processScore(s3, callback);
  console.log(`Score ${s1}: ${result1}`);
  console.log(`Score ${s2}: ${result2}`);
  console.log(`Score ${s3}: ${result3}`);
}

// console.log(applyToAll(55, 72, 91, getLetterGrade));
// // Score 55: D
// // Score 72: C
// // Score 91: A

// console.log(applyToAll(55, 72, 91, score => score >= 60 ? "Pass" : "Fail"));
// // Score 55: Fail
// // Score 72: Pass
// // Score 91: Pass

// Part 4 — Score Tracker==========================================
//   Closures       Scope       Default Parameters
// Write a function createTracker(subjectName, passingScore = 60) that returns a single function.
//  Every time the returned function is called with a score,
// it updates private state and prints a summary line.

// The private state — count, total, highest score, lowest score — lives inside the closure.
// It is not accessible from outside. The only way to interact with it is by calling the returned function.

// Signature
// function createTracker(subjectName, passingScore = 60) {
//   let count   = 0;
//   let total   = 0;
//   let highest = 0;
//   let lowest  = 100;

//   return function(score) {
//     // 1. Validate score using isValidScore
//     // 2. Update count, total, highest, lowest
//     // 3. Print the summary line (see expected output below)
//   };
// }

// Why does this demonstrate a closure?
// After createTracker() finishes executing, its local variables (count, total, highest,
// lowest) would normally be deleted. But because the returned function still references
// them, JavaScript keeps them alive in memory. Each call to mathTracker() reads and
// updates the same variables — without them being global.

// Create two trackers (math and english) and confirm they maintain completely
// separate state. Explain this in a comment.

function createTracker(subjectName, passingScore = 60) {
  let count = 0;
  let total = 0;
  let highest = 0;
  let lowest = 100;

  return function (score) {
    if (!isValidScore(score)) {
      console.warn("Error: invalid score, not recorded.");
    } else {
      count++;
      total += score;
      if (score > highest) {
        highest = score;
      }
      if (score < lowest) {
        lowest = score;
      }
      const avg = total / count;
      const passFail = score >= passingScore ? "Pass" : "Fail";
      console.log(
        `[${subjectName}]  #${count}   score: ${score}   avg: ${avg.toFixed(2)}   high: ${highest}   low: ${lowest}   → ${passFail}`,
      );
    }
  };
}

// Expected output
const mathTracker = createTracker("Mathematics");

console.log(mathTracker(78));
// [Mathematics]  #1   score: 78   avg: 78.00   high: 78   low: 78   → Pass

console.log(mathTracker(45));
// [Mathematics]  #2   score: 45   avg: 61.50   high: 78   low: 45   → Fail

console.log(mathTracker(92));
// [Mathematics]  #3   score: 92   avg: 71.67   high: 92   low: 45   → Pass

console.log(mathTracker(110));
// [Mathematics]  Error: invalid score, not recorded.

// Each tracker is completely independent:
const englishTracker = createTracker("English", 55);
console.log(englishTracker(60));
// [English]  #1   score: 60   avg: 60.00   high: 60   low: 60   → Pass
// The Pass / Fail label at the end of each line must use a ternary operator.

// Bonus — The Final Report============================================
//   All Concepts
// Write a function printStudentReport(name, exam, homework, attendance, bonus) that combines all four parts and prints a complete evaluation for one student.

// It must:
// Calculate the weighted score using calculateWeightedScore (Part 2)
// Validate the result using isValidScore (Part 1)
// Determine the letter grade using getLetterGrade (Part 1)
// Check retake eligibility using isEligibleForRetake (Part 2)
// Print the full report using template literals only — no string concatenation

// Expected output
// printStudentReport("Petra Novak", 74, 88, 82, 3);

// ====================================
// Student:   Petra Novak
// ------------------------------------
// Exam:       74    (weight: 60%)
// Homework:   88    (weight: 40%)
// Bonus:       3    pts
// Final score: 82.60
// Grade:       B
// Attendance:  82%
// Retake:      No
// ====================================

// Acceptance Criteria
// Part 1
// isValidScore correctly handles the edge case of score === 0 (must return true)
// getLetterGrade uses if / else if / else — no switch, no ternary chains
// Default parameter passingScore = 50 is present and works
// The == vs === comparison is demonstrated and explained in a comment

// Part 2
// All three functions are arrow functions assigned to const
// calculateAverage uses default parameters for s4 and count
// isEligibleForRetake is a single return statement using logical operators

// Part 3
// processScore is a function expression (not a declaration or arrow function)
// applyToAll is a function declaration
// Both functions are tested with at least two different callbacks each

// Part 4
// createTracker uses a closure — no global variables for count, total, highest, lowest
// The returned function is a function expression (anonymous)
// Ternary operator is used for the Pass / Fail label
// Two independent trackers are created and shown to have separate state
// A comment explains what a closure is and why the state survives

// General
// No var — only let and const
// All output uses template literals
// The file runs without errors: node grades.js

// Submission
// Create a file named grades.js.
// At the bottom of the file, include test calls for every function — at least two tests per function, including at least one edge case or invalid input.
// Push to your GitHub repository and share the link.

// Your test calls are part of the grade. A function with no tests has not been verified.
// Include both "happy path" tests (expected input) and edge cases (invalid, boundary values).

function printStudentReport(name, exam, homework, attendance, bonus) {
  const weightScore = calculateWeightedScore(exam, homework, bonus);

  if (!isValidScore(weightScore)) {
    console.warn("Invalid score");
    return;
  }

  const letterGrade = getLetterGrade(weightScore);
  const eligible = isEligibleForRetake(weightScore, attendance);

  const retakeText = eligible ? "Yes" : "No";

  console.log(`
====================================
Student:     ${name}
------------------------------------
Exam:        ${exam}     (weight: 60%)
Homework:    ${homework} (weight: 40%)
Bonus:       ${bonus} pts
------------------------------------
Final score: ${weightScore.toFixed(2)}
Grade:       ${letterGrade}
Attendance:  ${attendance}%
Retake:      ${retakeText}
====================================
`);
}

console.log(printStudentReport("Petra Novak", 74, 88, 82, 3));
