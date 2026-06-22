// # JavaScript ფუნქციები და Callback-ები — პრაქტიკული დავალებები

// > **თემა:** ფუნქციის პარამეტრად გადაცემა, callback-ის გამოძახება, `return`, predicate ფუნქციები, wrapper ფუნქციები და მარტივი functional programming კონცეპტები.

// ეს დავალებები განკუთვნილია დამწყები სტუდენტებისთვის, რომლებსაც უკვე ნასწავლი აქვთ JavaScript-ის საბაზისო ფუნქციები, ცვლადები, პირობები და მარტივი ოპერაციები.

// დავალებები ნელ-ნელა ზრდის სირთულეს. მიზანია სტუდენტებმა კარგად გაიგონ, რომ:

// - ფუნქცია შეიძლება შევინახოთ ცვლადში;
// - ფუნქცია შეიძლება გადავცეთ სხვა ფუნქციას არგუმენტად;
// - გადაცემული ფუნქცია შეიძლება გამოვიძახოთ შიგნით;
// - ფუნქციას შეუძლია დააბრუნოს სხვა ფუნქცია;
// - callback-ის დახმარებით შეგვიძლია ქცევის მოქნილად შეცვლა.

// ---

// ## როგორ ვიმუშაოთ ამ დავალებებზე

// ყოველ დავალებაში სტუდენტმა უნდა შეავსოს `TODO` ადგილები.

// რეკომენდებულია თითოეული დავალების შემდეგ სტუდენტმა ხმამაღლა ახსნას:

// 1. რომელ ცვლადში ინახება ფუნქცია;
// 2. სად ხდება ფუნქციის გადაცემა;
// 3. სად ხდება ფუნქციის გამოძახება;
// 4. რას აბრუნებს ფუნქცია, თუ აბრუნებს რამეს.

// ---

// # დავალება 1 — ფუნქციის უბრალოდ გადაცემა და გამოძახება

// ## მიზანი

// სტუდენტმა გაიგოს, რომ `fn` არის ფუნქცია და მისი გამოძახება შეიძლება `fn()`-ით.

// ```js
function run(fn) {
  console.log("Before");

  // TODO: გამოიძახე fn
  fn();

  console.log("After");
}

const sayHello = () => console.log("Hello");

run(sayHello);
// ```

// ## მოსალოდნელი შედეგი

// ```txt
// Before
// Hello
// After
// ```

// ---გადაეცა ერთ ფუნქციას სხვა ფუნქცია fn, რომელიც გამოძახდება run ფუნქციის შიგნით.

// # დავალება 2 — ფუნქციაზე ერთი არგუმენტის გადაცემა

// ## მიზანი

// სტუდენტმა დაინახოს, რომ callback-ს შეგვიძლია გადავცეთ არგუმენტები.

// ```js
function runWithNumber(fn) {
  const number = 10;

  // TODO: გამოიძახე fn და გადაეცი number
  fn(number);
}

const printDouble = (x) => console.log(x * 2);

runWithNumber(printDouble);
// ფუნქციის შიგნით შევქმენი ცვლადი, რომელიც ქოლბექ ფუნქციას გადავეცი პარამეტრად
// და მერე runWithNumber-ს გადავეცი ეს ქოლბექი არგუმენტად თავისივე პარამეტრ-არგუმენტით

// ## მოსალოდნელი შედეგი

// ```txt
// 20
// ```

// # დავალება 3 — სხვადასხვა ფუნქციის გადაცემა ერთსა და იმავე executor-ში

// ## მიზანი

// სტუდენტმა დაინახოს, რომ იგივე ფუნქცია სხვადასხვა ქცევას იღებს გადაცემული callback-ის მიხედვით.

// ```js
// function executeOperation(a, b, operation) {
//   // TODO: გამოიძახე operation და გადაეცი a და b
//   operation(a, b);
// }

// const add = (x, y) => console.log(x + y);
// const multiply = (x, y) => console.log(x * y);
// const subtract = (x, y) => console.log(x - y);

// executeOperation(5, 2, add);
// executeOperation(5, 2, multiply);
// executeOperation(5, 2, subtract);
// ერთი ქოლბექია ფუნქციის შიგნით რომელიც იღებს ორ პარამეტრს ა,ბ და მერე გამოძახებისას
//გადაეცემა თან არგუმენტები (რიცხვები) და თან ის სხვადასხვა ფუნქციები რომლებიც სხ/სხ მოქმედებას ასრულებენ

// ## მოსალოდნელი შედეგი

// ```txt
// 7
// 10
// 3
// ```

// ---

// # დავალება 4 — `console.log`-ის ნაცვლად `return`

// ## მიზანი

// სტუდენტმა გაიგოს განსხვავება ფუნქციას შორის, რომელიც პირდაპირ ბეჭდავს შედეგს, და ფუნქციას შორის, რომელიც აბრუნებს მნიშვნელობას.

// ```js
// function calculate(a, b, operation) {
//   // TODO: დააბრუნე operation(a, b)-ის შედეგი
//   return operation(a, b);
// }

// const add = (x, y) => x + y;
// const multiply = (x, y) => x * y;

// const result1 = calculate(3, 4, add);
// const result2 = calculate(3, 4, multiply);

// console.log(result1);
// console.log(result2);
// ```

// ## მოსალოდნელი შედეგი

// ```txt
// 7
// 12
// ```

// ---

// # დავალება 5 — callback-ის შედეგის გამოყენება სხვა ლოგიკაში

// ## მიზანი

// სტუდენტმა დაინახოს, რომ callback-ის დაბრუნებული შედეგი შეგვიძლია შევინახოთ ცვლადში და შემდეგ გამოვიყენოთ.

// ```js
function printCalculation(a, b, operation) {
  const result = operation(a, b); // TODO: გამოიძახე operation და გადაეცი a და b
  console.log("Result is: " + result);
}

const divide = (x, y) => x / y;

printCalculation(10, 2, divide);
// ანუ ცვადი შევქმენით და ცვლადზე შევინახეთ ქოლბექის ოპერაციის შედეგი

// ## მოსალოდნელი შედეგი

// ```txt
// Result is: 5
// ```

// # დავალება 6 — პირობის მიხედვით სხვადასხვა callback-ის გამოძახება

// ## მიზანი

// callback-ები გამოვიყენოთ როგორც სხვადასხვა ქცევა, რომლებიც პირობის მიხედვით შესრულდება.

// ```js
function checkAge(age, onAdult, onMinor) {
  if (age >= 18) {
    // TODO: გამოიძახე onAdult
    onAdult();
  } else {
    // TODO: გამოიძახე onMinor
    onMinor();
  }
}

const adultMessage = () => console.log("You are adult");
const minorMessage = () => console.log("You are minor");

checkAge(21, adultMessage, minorMessage);
checkAge(15, adultMessage, minorMessage);
// ```ანუ გვაქვს ორი ქოლბექ ფუნქცია, ერთი ზრდასრულისთვის მეორე არასრულწლოვნისთვის, და checkAge
// ფუნქციაში პირობის მიხედვით ხდება გამოძახება, ორივე ქოლბექ ფუნქცია checkAge ფუნქციის პარამეტრებში გადაეცემა,
//  checkAge ფუნქციაში ხდება პირობის შემოწმება და შესაბამისად გამოძახება

// ## მოსალოდნელი შედეგი

// ```txt
// You are adult
// You are minor
// ```

// ---

// # დავალება 7 — callback-ს გადავცეთ მონაცემიც

// ## მიზანი

// სტუდენტმა გაიგოს, რომ არჩეულ callback-ს შეგვიძლია კონკრეტული მნიშვნელობაც გადავცეთ.

// ```js
function checkNumber(number, onPositive, onNegative, onZero) {
  if (number > 0) {
    // TODO: გამოიძახე onPositive და გადაეცი
    onPositive(number);
  } else if (number < 0) {
    // TODO: გამოიძახე onNegative და გადაეცი number
    onNegative(number);
  } else {
    // TODO: გამოიძახე onZero და გადაეცი number
    onZero(number);
  }
}

const positive = (x) => console.log(x + " is positive");
const negative = (x) => console.log(x + " is negative");
const zero = (x) => console.log(x + " is zero");

checkNumber(10, positive, negative, zero);
checkNumber(-3, positive, negative, zero);
checkNumber(0, positive, negative, zero);
// ``` ანუ checkNumber ფუნქციაში გვაქვს პირობა, რომელიც განსაზღვრავს რომელი ქოლბექი უნდა გამოიძახოს და
//  შესაბამისად გადაეცემა number პარამეტრი, checkNumber ფუნქციაში გადაცემული ქოლბექები კი ბეჭდავენ შესაბამის ტექსტს
//რა მოხდება number როარ გადავცეთ ქოლბექს? ->
// აქ არა მხოლოდ ფუნქციას ვიძახებთ, არამედ მონაცემსაც ვუგზავნით ამ ფუნქციას. ანუ:
// checkNumber წყვეტს რომელი callback გამოიძახოს.
// მერე ამ callback-ს გადასცემს number-ის მნიშვნელობას.
// callback იღებს ამ მნიშვნელობას თავის პარამეტრში (x) და იყენებს.

// ## მოსალოდნელი შედეგი

// ```txt
// 10 is positive
// -3 is negative
// 0 is zero
// ```

// ---

// # დავალება 8 — ფუნქცია, რომელიც ტექსტს გარდაქმნის

// ## მიზანი

// callback გამოვიყენოთ როგორც transform ფუნქცია, ანუ ფუნქცია, რომელიც იღებს მნიშვნელობას და აბრუნებს შეცვლილ მნიშვნელობას.

// ```js
function transformText(text, transformer) {
  // TODO: დააბრუნე transformer(text)
  return transformer(text);
}

const makeUpperCase = (value) => value.toUpperCase();
const addExclamation = (value) => value + "!";

console.log(transformText("hello", makeUpperCase));
console.log(transformText("hello", addExclamation));
// ```აქ ეს transsformer(text) არის ქოლბექ ფუნქციის გამოძახება (makeUpperCase და addExclamation) და ამ ფუნქციას გადაეცემა text პარამეტრი, რომელიც transformText
// ფუნქციის პარამეტრია, და ამ ქოლბექ ფუნქციების შედეგი ბრუნდება transformText ფუნქციიდან
// value იგივე text არის, უბრალოდ ქოლბექ ფუნქციების პარამეტრის სახელი value-ია, ხოლო transformText ფუნქციის პარამეტრის სახელი text-ია,
// მაგრამ ეს არ არის პრობლემა, რადგან ეს ორი ცვლადი სხვადასხვა ფუნქციებშია და ერთმანეთისგან დამოუკიდებელია

// ## მოსალოდნელი შედეგი

// ```txt
// HELLO
// hello!
// ```

// ---

// # დავალება 9 — ერთი და იგივე მნიშვნელობის ორჯერ დამუშავება*******************AAAA :) ******************************

// ## მიზანი

// სტუდენტმა დაინახოს, რომ ერთი callback რამდენჯერმე შეიძლება გამოვიძახოთ.

// ```js
// function applyTwice(value, fn) {
//   const firstResult =  fn(value); // TODO: გამოიძახე fn value-ზე
//   const secondResult = fn(firstResult); // TODO: გამოიძახე fn firstResult-ზე

//   return secondResult;
// }

// const addOne = (x) => x + 1;
// const double = (x) => x * 2;

// console.log(applyTwice(5, addOne));
// console.log(applyTwice(5, double));
// ```

// ## მოსალოდნელი შედეგი

// ```txt
// 7
// 20
// ```

// ## ახსნა

// ```js
// applyTwice(5, addOne);
// const firstResult = fn(value);
// const secondResult = fn(firstResult);
// აქ მეორე ხაზში fn თავიდან კი არ იღებს value-ს, არამედ პირველი გაშვების შედეგს.

// იგივეა, რაც:

// ```js
// addOne(addOne(5));
// applyTwice ფუნქცია იღებს მნიშვნელობას (value) და callback ფუნქციას (fn).
// callback ჯერ სრულდება value-ზე და მისი შედეგი ინახება firstResult-ში.
// შემდეგ იგივე callback ისევ სრულდება firstResult-ზე.
// საბოლოოდ ფუნქცია აბრუნებს მეორე გამოძახების შედეგს.
// მაგალითად: applyTwice(5, addOne) => addOne(addOne(5)) => 7.

// ---

// # დავალება 10 — callback როგორც შემოწმების ფუნქცია

// ## მიზანი

// შემოვიტანოთ პატარა functional programming იდეა: **predicate**.

// Predicate არის ფუნქცია, რომელიც აბრუნებს `true` ან `false` მნიშვნელობას.

// ```js
// function checkValue(value, validator) {
//   if (validator(value)) {
//     console.log("Valid");
//   } else {
//     console.log("Invalid");
//   }
// }

// const isPositive = (x) => x > 0;
// const isAdultAge = (x) => x >= 18;

// checkValue(10, isPositive);
// checkValue(-5, isPositive);

// checkValue(21, isAdultAge);
// checkValue(16, isAdultAge);
// ```

// ## მოსალოდნელი შედეგი

// ```txt
// Valid
// Invalid
// Valid
// Invalid

// checkValue იღებს მნიშვნელობას (value) და შემოწმების ფუნქციას (validator).
// validator აბრუნებს true ან false მნიშვნელობას.
// თუ შედეგი true-ა, იბეჭდება "Valid", ხოლო თუ false-ა — "Invalid".
// ეს საშუალებას გვაძლევს სხვადასხვა ტიპის შემოწმება ერთსა და იმავე ფუნქციაში გამოვიყენოთ.

// ---

// # დავალება 11 — მოქმედების შესრულება მხოლოდ მაშინ, როცა პირობა სწორია

// ## მიზანი

// callback-ები გავყოთ ორ ტიპად:

// - ერთი ამოწმებს პირობას;
// - მეორე ასრულებს მოქმედებას.

// ```js
function when(value, conditionFn, actionFn) {
  if (conditionFn(value)) {
    // TODO: გამოიძახე actionFn და გადაეცი value
    actionFn(value);
  }
}

const isEven = (x) => x % 2 === 0;
const printNumber = (x) => console.log("Number: " + x);

when(10, isEven, printNumber);
when(7, isEven, printNumber);
// ```

// ## მოსალოდნელი შედეგი

// ```txt
// Number: 10
// ```

// მეორე გამოძახება არაფერს დაბეჭდავს, რადგან `7` ლუწი არ არის.

// ---

// # დავალება 12 — ფუნქცია, რომელიც აბრუნებს სხვა ფუნქციას

// ## მიზანი

// პირველი შეხება higher-order function-თან.

// Higher-order function არის ფუნქცია, რომელიც:

// - იღებს სხვა ფუნქციას არგუმენტად;
// - ან აბრუნებს სხვა ფუნქციას;
// - ან ორივეს ერთად აკეთებს.

// ```js
function createMultiplier(multiplier) {
  return function (number) {
    // TODO: დააბრუნე number * multiplier
    return number * multiplier;
  };
}

const double = createMultiplier(2); // double არის ფუნქცია, რომელიც იღებს რიცხვს და აბრუნებს მას 2-ით გამრავლებულს
const triple = createMultiplier(3); // ცვლადში triple ინახება ფუნქცია, რომელიც იღებს რიცხვს და აბრუნებს მას 3-ით გამრავლებულს

console.log(double(5));
console.log(triple(5));
// ```

// ## მოსალოდნელი შედეგი

// ```txt
// 10
// 15
// ```

// ## კითხვა სტუდენტებისთვის

// `double` ცვლადში რა ინახება — რიცხვი თუ ფუნქცია?
// createMultiplier აბრუნებს ახალ ფუნქციას, რომელიც იმახსოვრებს multiplier-ს (closure).
// double და triple არიან ფუნქციები, რომლებიც შესაბამისად ამრავლებენ რიცხვს 2-ზე და 3-ზე.
// ანუ double(5) => 10, triple(5) => 15.

// # დავალება 13 — ფუნქციის “შეფუთვა” — logger wrapper

// ## მიზანი

// სტუდენტმა გაიგოს, როგორ შეიძლება ფუნქციას დავუმატოთ დამატებითი ქცევა ისე, რომ თვითონ ფუნქცია არ შევცვალოთ.

// ```js
function withLogger(fn) {
  return function (a, b) {
    console.log("Function started");

    const result = fn(a, b); // TODO: გამოიძახე fn(a, b)

    // TODO: დააბრუნე result
    console.log("Function finished");

    return result;
  };
}

const add = (x, y) => x + y;

const loggedAdd = withLogger(add);

console.log(loggedAdd(2, 3));
// ```

// ## მოსალოდნელი შედეგი

// ```txt
// Function started
// Function finished
// 5
// სწორედ ესაა wrapper-ის იდეა — ფუნქციას დამატებით ქცევას ვუმატებთ ისე, რომ თვითონ add არ შეგვიცვლია

// ## შენიშვნა

// ეს უკვე ჰგავს პატარა **decorator pattern**-ს: არსებული ფუნქცია არ იცვლება, მაგრამ მას გარე ფუნქცია უმატებს დამატებით ქცევას.

// ---

// # დავალება 14 — ორი ფუნქციის ერთმანეთზე გადაბმა — composition

// ## მიზანი

// შემოვიტანოთ functional programming-ის მარტივი იდეა: **composition**.

// Composition ნიშნავს, რომ ერთი ფუნქციის შედეგს გადავცემთ მეორე ფუნქციას.

// ```js
function compose(firstFn, secondFn) {
  return function (value) {
    const secondResult = secondFn(value); // TODO: გამოიძახე secondFn value-ზე
    const finalResult = firstFn(secondResult); // TODO: გამოიძახე firstFn secondResult-ზე

    return finalResult;
  };
}

const addOne = (x) => x + 1;
const doubled = (x) => x * 2;

const addOneAfterDouble = compose(addOne, doubled);

console.log(addOneAfterDouble(5));
// ```

// ## მოსალოდნელი შედეგი

// ```txt
// 11
// compose აერთიანებს ორ ფუნქციას.
// ჯერ სრულდება secondFn და მისი შედეგი გადაეცემა firstFn-ს.
// ანუ ერთი ფუნქციის შედეგი გამოიყენება მეორე ფუნქციის არგუმენტად.
// მაგალითად: compose(addOne, doubled)(5) => addOne(doubled(5)) => 11.

// ## ახსნა

// ```js
// double(5); // 10
// addOne(10); // 11
// ```

// ანუ:

// ```js
// addOne(double(5));
// ```

// ---

// # დავალება 15 — validation wrapper

// ## მიზანი

// პრაქტიკული higher-order function: ჯერ შევამოწმოთ მნიშვნელობა, შემდეგ შევასრულოთ action.

// ```js
function withValidation(validator, action) {
  return function (value) {
    if (validator(value)) {
      // TODO: გამოიძახე action და გადაეცი value
      action(value);
    } else {
      console.log("Invalid value");
    }
  };
}

const isPositive = (x) => x > 0;
const printSquare = (x) => console.log(x * x);

const printSquareOnlyIfPositive = withValidation(isPositive, printSquare);

printSquareOnlyIfPositive(5);
printSquareOnlyIfPositive(-2);
// ```

// ## მოსალოდნელი შედეგი

// ```txt
// 25
// Invalid value
// ```

// withValidation იღებს validator და action ფუნქციებს.
// ჯერ validator ამოწმებს მნიშვნელობას.
// თუ შედეგი true-ა, სრულდება action(value),
// ხოლო თუ false-ა, იბეჭდება "Invalid value".
// ასე შეგვიძლია ნებისმიერ ფუნქციას დავუმატოთ ვალიდაცია მისი შეცვლის გარეშე.

// # დამატებითი თეორიული კითხვები

// ეს კითხვები შეიძლება გამოიყენო დავალებებს შორის, როგორც მოკლე განხილვის ნაწილი.

// ---

// ## კითხვა 1 — რატომ `add` და არა `add()`?

// ```js
// logger(add);
// ```

// რატომ არ ვწერთ ასე?

// ```js
// logger(add());
// ```

// ## სწორი იდეა

// `add` ნიშნავს: ფუნქცია გადაეცი.

// `add()` ნიშნავს: ფუნქცია ახლავე გამოიძახე და მისი დაბრუნებული შედეგი გადაეცი.

// ---

// ## კითხვა 2 — რას დაბეჭდავს ეს კოდი?

// ```js
// const sayHi = () => console.log("Hi");

// console.log(sayHi);
// console.log(sayHi());
// ```

// ## განხილვის იდეა

// პირველი `console.log` დაბეჭდავს თვითონ ფუნქციას.

// მეორე `console.log` ჯერ გამოიძახებს ფუნქციას, ამიტომ დაიბეჭდება `Hi`, შემდეგ კი დაიბეჭდება ის მნიშვნელობა, რასაც `sayHi()` აბრუნებს.

// რადგან `sayHi` არაფერს აბრუნებს, მისი შედეგი არის `undefined`.

// ---

// ## კითხვა 3 — რა არის `operation`?

// ```js
// function calculate(a, b, operation) {
//   return operation(a, b);
// }
// ```

// ## სწორი იდეა

// `operation` არის პარამეტრი, რომელშიც ფუნქცია ინახება.

// მაგალითად:

// ```js
// calculate(3, 4, add);
// ```

// ამ დროს `operation` ხდება იგივე, რაც `add`.

// ---

// # მთავარი შეჯამება

// JavaScript-ში ფუნქცია არის მნიშვნელობა.

// ეს ნიშნავს, რომ ფუნქცია შეგვიძლია:

// - შევინახოთ ცვლადში;
// - გადავცეთ სხვა ფუნქციას;
// - გამოვიძახოთ სხვა ფუნქციის შიგნით;
// - დავაბრუნოთ სხვა ფუნქციიდან;
// - გამოვიყენოთ ქცევის მოქნილად შესაცვლელად.

// ყველაზე მნიშვნელოვანი განსხვავებაა:

// ```js
// someFunction;
// ```

// და

// ```js
// someFunction();
// ```

// `someFunction` ნიშნავს თვითონ ფუნქციას.

// `someFunction()` ნიშნავს ფუნქციის გამოძახებას.
