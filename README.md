1/ let greeting;
greetign = {};
console.log(greetign);
A: {}
B: ReferenceError: greetign is not defined
C: undefined

Answer:=> B: ReferenceError: greetign is not defined
explanation:=> i see the code greetign is a empty object.As a result, JavaScript throws a ReferenceError because greetign is not defined

2/ function sum(a, b) {
  return a + b;
}

sum(1, "2");
A: NaN
B: TypeError
C: "12"
D: 3
Answer:=> A: NaN
explanation:=> in the code a=1 and b="2" so a is a number but b is a string. when i try to add a number and a string in JavaScript the result is NaN

3/ const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
A: ['🍕', '🍫', '🥑', '🍔']
B: ['🍝', '🍫', '🥑', '🍔']
C: ['🍝', '🍕', '🍫', '🥑', '🍔']
D: ReferenceError

Answer:=> A: ['🍕', '🍫', '🥑', '🍔']
explanation:=> if the variable is an object, its properties can be modified. In the given scenario, the info.favoriteFood property is changed to "🍝", but the original food array remains unaltered, resulting in ['🍕', '🍫', '🥑', '🍔'] 

4/ function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
A: Hi there,
B: Hi there, undefined
C: Hi there, null
D: ReferenceError

Answer:=> B: Hi there, undefined
explanation:=> The function still executes, and the string template includes the undefined value, resulting in Hi there, undefined being logged to the console.

5/ let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
A: 1
B: 2
C: 3
D: 4
Answer:=> C: 3
explanation:=> The condition if (num) evaluates to true for numbers 1, 2, and 3 in the array. For each truthy value encountered, the count variable is incremented. Therefore, count becomes 3, and console.log(count) outputs 3.