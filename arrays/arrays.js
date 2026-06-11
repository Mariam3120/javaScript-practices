// // Challenge 1: First & last=====================================
// // const fruits = ["apple", "banana", "cherry", "date"];
// // // 1. Log the first element
// // // 2. Log the last element (use .length)
// // // 3. Log the total count of fruits

const fruits = ["apple", "banana", "cherry", "date"];
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]); //ინდექსი 0დან იქყება ამიტომ სრულ სიგრძეს მინუს 1 ინდექსი სამია, რაოდენობა ელემენტების 4
console.log(fruits.length);

// // Challenge 2: Update by index===========================
// const scores = [80, 55, 90, 42, 73];
// // // 1. Change the second score to 60
// // // 2. Change the last score to 99
// // // 3. Log the updated array
scores[1] = 60; // ინდექსი 1 არის მეორე ელემენტი და როგორც სხვა შემთხვევაში, ახალი მნიშვნელობა მივანიჭეთ
scores[scores.length - 1] = 99; // ბოლო ელემენტის ინდექსი არის სიგრძე მინუს 1, ამიტომ ასე მივანიჭეთ ახალი მნიშვნელობა
console.log(scores);

// // 2 - LOOPS======================================================
// // Challenge 3: for loop - sum
// const prices = [12, 5, 8, 30, 3];
// // // Calculate the total sum of all prices
// // // using a for loop. Log the result.
let sum = 0; //ეს არის "ყუთი", სადაც ლუპი ნელ-ნელა დააგროვებს ჯამს. თუ თავიდან 0 არ იქნება, დასამატებელი ადგილი არ გვექნება.
for (let i = 0; i < prices.length; i++) {
  sum += prices[i];
}
console.log(sum);

// // Challenge 4: for...of - greet================================================
// // // Log "Hello, Alice!", "Hello, Bob!" …
// // // for each name using for...of

const names = ["Alice", "Bob", "Charlie", "Diana"];

for (let name of names) {
  console.log(`Hello, ${name}!`);
}

// // Challenge 5: forEach - multiply==========================================

// // Log each number multiplied by 3
// // using .forEach()

const nums = [2, 4, 6, 8, 10];

nums.forEach((num) => {
  console.log(num * 3);
});
// //პირველ იტერაციაზე: num = 2 ასრულებს: console.log(2 * 3);
// // მეორე იტერაციაზე:num = 4 ასრულებს: console.log(4 * 3); და ასე გრძელდება ბოლომდე.
// //აქ num არის მიმდინარე ელემენტი.
// /* num = 2
// num = 4
// num = 6
// num = 8
// num = 10*/

// // 3 - PUSH, POP, SHIFT, UNSHIFT ======================================
// // Challenge 6: Queue simulation
// // 1. Add "Mike" to the end
// // 2. Add "Lena" to the beginning
// // 3. Remove the first person (they got served)
// // 4. Remove the last person (they left)
// // 5. Log the final queue

const queue = ["Tom", "Sara"];
const pushQueue = queue.push("mike"); // ეს დააბრუნებს უბრალოდ 3-ს
// // push() აბრუნებს მასივის ახალ სიგრძეს. ამიტო არაა საჭირო ახალ ცვლადში შენახვა,
// // რადგან ჩვენ უბრალოდ გვინდა ელემენტის დამატება და არა სიგრძის მიღება.
// console.log(queue);

// //2
queue.unshift("Lena");
console.log(queue);

// //3
queue.shift();
console.log(queue);
// //4
queue.pop();
console.log(queue);

// // 4 - MAP==========================================
// // Challenge 7: Celsius to Fahrenheit
// // Create a new array where each
// // Celsius temp is converted to Fahrenheit.
// // Formula: (C * 9/5) + 32
const temps = [0, 10, 20, 30, 40];
const celsiusToFar = temps.map((temp) => {
  return (temp * 9) / 5 + 32;
});
console.log(temps);
console.log(celsiusToFar);

// Challenge 8: Pass the threshold====================================
// 1. Get only scores that are 60 or above
// 2. Get only scores below 60 (failing)
// Log both arrays
const scores = [45, 82, 60, 37, 91, 55, 78];
const above = scores.filter((num) => {
  return num >= 60;
});
console.log(above);

const below = scores.filter((num) => {
  return num < 60;
});
console.log(below);

// Challenge 9: Count occurrences===========================================
// // Use .reduce() to count how many times
// // each answer appears.
// // Expected result: { yes: 4, no: 2 }
const votes = ["yes", "no", "yes", "yes", "no", "yes"];
const reduceVotes = votes.reduce((acc, vote) => {
  if (acc[vote] === undefined) {
    acc[vote] = 1;
  } else {
    acc[vote] += 1;
  }
  return acc;
}, {});
console.log(reduceVotes);

// 7 - SORT & REVERSE===========================================
// Challenge 10: Sort numbers
// // 1. Sort ascending (smallest first)
// // 2. Sort descending (largest first)
// // 3. Reverse the original array
const someNums = [40, 1, 5, 200, 13, 99];

// someNums.sort((a, b) => a - b);
// console.log(someNums);
// someNums.sort((a, b) => b - a);
// console.log(someNums);
// someNums.reverse();
// console.log(someNums); ქვემოთ ოდნავ უკეთესი ვერსია 

const ascending = [...someNums].sort((a, b) => a - b);
console.log(ascending);
const descending = [...someNums].sort((a, b) => b - a);
console.log(descending);
const reversed = [...someNums].reverse();
console.log(reversed);