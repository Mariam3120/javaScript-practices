// Challenge 1: First & last============================
// const fruits = ["apple", "banana", "cherry", "date"];
// // 1. Log the first element
// // 2. Log the last element (use .length)
// // 3. Log the total count of fruits

const fruits = ["apple", "banana", "cherry", "date"];
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]); //ინდექსი 0დან იქყება ამიტომ სრულ სიგრძეს მინუს 1 ინდექსი სამია, რაოდენობა ელემენტების 4
console.log(fruits.length);

// Challenge 2: Update by index===========================
const scores = [80, 55, 90, 42, 73];
// // 1. Change the second score to 60
// // 2. Change the last score to 99
// // 3. Log the updated array
scores[1] = 60; // ინდექსი 1 არის მეორე ელემენტი და როგორც სხვა შემთხვევაში, ახალი მნიშვნელობა მივანიჭეთ
scores[scores.length - 1] = 99; // ბოლო ელემენტის ინდექსი არის სიგრძე მინუს 1, ამიტომ ასე მივანიჭეთ ახალი მნიშვნელობა
console.log(scores);

// 2 - LOOPS
// Challenge 3: for loop - sum
const prices = [12, 5, 8, 30, 3];
// // Calculate the total sum of all prices
// // using a for loop. Log the result.
let sum = 0; //ეს არის "ყუთი", სადაც ლუპი ნელ-ნელა დააგროვებს ჯამს. თუ თავიდან 0 არ იქნება, დასამატებელი ადგილი არ გვექნება.
for (let i = 0; i < prices.length; i++) {
  sum += prices[i];
}
console.log(sum);

// Challenge 4: for...of - greet
// // Log "Hello, Alice!", "Hello, Bob!" …
// // for each name using for...of

const names = ["Alice", "Bob", "Charlie", "Diana"];

for (let name of names) {
  console.log(`Hello, ${name}!`);
}


// Challenge 5: forEach - multiply

// Log each number multiplied by 3
// using .forEach()

const nums = [2, 4, 6, 8, 10];

nums.forEach((num) => {
     console.log(num * 3);
})
//პირველ იტერაციაზე: num = 2 ასრულებს: console.log(2 * 3); 
// მეორე იტერაციაზე:num = 4 ასრულებს: console.log(4 * 3); და ასე გრძელდება ბოლომდე.
//აქ num არის მიმდინარე ელემენტი.
/* num = 2
num = 4
num = 6
num = 8
num = 10*/

// 3 - PUSH, POP, SHIFT, UNSHIFT
// Challenge 6: Queue simulation
// 1. Add "Mike" to the end
// 2. Add "Lena" to the beginning
// 3. Remove the first person (they got served)
// 4. Remove the last person (they left)
// 5. Log the final queue

const queue = ["Tom", "Sara"];
const pushQueue = queue.push("mike"); // ეს დააბრუნებს უბრალოდ 3-ს 
// push() აბრუნებს მასივის ახალ სიგრძეს. ამიტო არაა საჭირო ახალ ცვლადში შენახვა, 
// რადგან ჩვენ უბრალოდ გვინდა ელემენტის დამატება და არა სიგრძის მიღება.
console.log(queue);

//2
queue.unshift("Lena");
console.log(queue);

//3 
queue.shift();
console.log(queue);
//4 
queue.pop();
console.log(queue);