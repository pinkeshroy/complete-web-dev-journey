// start kar rahe kya bhaiya
// Dhananjay Yadav4:17 PM
// const keys = ["name", "age"]
// const values = ["Lydia", 22]

// const method = /* ?? */
// Object[method](keys.map((_, i) => {
// 	return [keys[i], values[i]]
// })) // { name: "Lydia", age: 22 }
// A: entries
// B: values
// C: fromEntries
// D: forEach
// Aditya Kumar4:19 PM
// B
// You4:20 PM
// a
// Dhananjay Yadav4:20 PM
// What should the value of method be to log { name: "Lydia", age: 22 }?
// You4:21 PM
// a
// Dhananjay Yadav4:21 PM
// const user = {
// 	email: "my@email.com",
// 	updateEmail: email => {
// 		this.email = email
// 	}
// }

// user.updateEmail("new@email.com")
// console.log(user.email)
// A: my@email.com
// B: new@email.com
// C: undefined
// D: ReferenceError
// You4:22 PM
// c
// a
// Aditya Kumar4:23 PM
// A
// Dhananjay Yadav4:23 PM
// What's the output?
// const animals = {};
// let dog = { emoji: '🐶' }
// let cat = { emoji: '🐈' }

// animals[dog] = { ...dog, name: "Mara" }
// animals[cat] = { ...cat, name: "Sara" }

// console.log(animals[dog])
// A: { emoji: "🐶", name: "Mara" }
// B: { emoji: "🐈", name: "Sara" }
// C: undefined
// D: ReferenceError
// You4:24 PM
// a
// Aditya Kumar4:24 PM
// a
// Dhananjay Yadav4:25 PM
// What's the output?
// class Calc {
// 	constructor() {
// 		this.count = 0 
// 	}

// 	increase() {
// 		this.count ++
// 	}
// }

// const calc = new Calc()
// new Calc().increase()

// console.log(calc.count)
// You4:26 PM
// 0
// Aditya Kumar4:26 PM
// 0
// Dhananjay Yadav4:26 PM
// How can we invoke sum in sum.js from index.js?
// // sum.js
// export default function sum(x) {
//   return x + x;
// }

// // index.js
// import * as sum from './sum';
// A: sum(4)
// B: sum.sum(4)
// C: sum.default(4)
// D: Default aren't imported with *, only named exports
// You4:28 PM
// a
// Aditya Kumar4:28 PM
// d
// Dhananjay Yadav4:28 PM
// What's the output?
// let name = 'Lydia';

// function getName() {
//   console.log(name);
//   let name = 'Sarah';
// }

// getName();
// A: Lydia
// B: Sarah
// C: undefined
// D: ReferenceError
// You4:29 PM
// a
// Aditya Kumar4:30 PM
// c
// Dhananjay Yadav4:30 PM
// What's the output?
// function nums(a, b) {
//   if (a > b) console.log('a is bigger');
//   else console.log('b is bigger');
//   return
//   a + b;
// }

// console.log(nums(4, 2));
// console.log(nums(1, 2));
// A: a is bigger, 6 and b is bigger, 3
// B: a is bigger, undefined and b is bigger, undefined
// C: undefined and undefined
// D: SyntaxError
// Aditya Kumar4:32 PM
// a
// You4:32 PM
// b
// Dhananjay Yadav4:34 PM
// What's the output?
// const createMember = ({ email, address = {}}) => {
// 	const validEmail = /.+\@.+\..+/.test(email)
// 	if (!validEmail) throw new Error("Valid email pls")

// 	return {
// 		email,
// 		address: address ? address : null
// 	}
// }

// const member = createMember({ email: "my@email.com" })
// console.log(member)
// A: { email: "my@email.com", address: null }
// B: { email: "my@email.com" }
// C: { email: "my@email.com", address: {} }
// D: { email: "my@email.com", address: undefined }
// Aditya Kumar4:36 PM
// a
// Dhananjay Yadav4:37 PM
// const promise1 = Promise.resolve('First')
// const promise2 = Promise.resolve('Second')
// const promise3 = Promise.reject('Third')
// const promise4 = Promise.resolve('Fourth')

// const runPromises = async () => {
// 	const res1 = await Promise.all([promise1, promise2])
// 	const res2  = await Promise.all([promise3, promise4])
// 	return [res1, res2]
// }

// runPromises()
// 	.then(res => console.log(res))
// 	.catch(err => console.log(err))
// A: [['First', 'Second'], ['Fourth']]
// B: [['First', 'Second'], ['Third', 'Fourth']]
// You4:37 PM
// c
// Dhananjay Yadav4:37 PM
// c: [['First', 'Second']]
// D: 'Third'
// You4:38 PM
// d
// Aditya Kumar4:38 PM
// d
// Dhananjay Yadav4:39 PM
// const myPromise = Promise.resolve(Promise.resolve('Promise'));

// function funcOne() {
//   setTimeout(() => console.log('Timeout 1!'), 0);
//   myPromise.then(res => res).then(res => console.log(`${res} 1!`));
//   console.log('Last line 1!');
// }

// async function funcTwo() {
//   const res = await myPromise;
//   console.log(`${res} 2!`)
//   setTimeout(() => console.log('Timeout 2!'), 0);
//   console.log('Last line 2!');
// }

// funcOne();
// funcTwo();
// A: Promise 1! Last line 1! Promise 2! Last line 2! Timeout 1! Timeout 2!
// B: Last line 1! Timeout 1! Promise 1! Last line 2! Promise2! Timeout 2! 
// C: Last line 1! Promise 2! Last line 2! Promise 1! Timeout 1! Timeout 2!
// D: Timeout 1! Promise 1! Last line 1! Promise 2! Timeout 2! Last line 2!
// Aditya Kumar4:41 PM
// a
// You4:41 PM
// c
// Dhananjay Yadav4:42 PM
// const myPromise = Promise.resolve('Woah some cool data');

// (async () => {
//   try {
//     console.log(await myPromise);
//   } catch {
//     throw new Error(`Oops didn't work`);
//   } finally {
//     console.log('Oh finally!');
//   }
// })();
// A: Woah some cool data
// B: Oh finally!
// C: Woah some cool data Oh finally!
// D: Oops didn't work Oh finally!
// Aditya Kumar4:43 PM
// a
// You4:43 PM
// d
// Dhananjay Yadav4:44 PM
// const handler = {
//   set: () => console.log('Added a new property!'),
//   get: () => console.log('Accessed a property!'),
// };

// const person = new Proxy({}, handler);

// person.name = 'Lydia';
// person.name;
// A: Added a new property!
// B: Accessed a property!
// C: Added a new property! Accessed a property!
// D: Nothing gets logged
// You4:45 PM
// d
// Aditya Kumar4:46 PM
// d
// Dhananjay Yadav4:47 PM
// function getFine(speed, amount) {
//   const formattedSpeed = new Intl.NumberFormat('en-US', {
//     style: 'unit',
//     unit: 'mile-per-hour'
//   }).format(speed);

//   const formattedAmount = new Intl.NumberFormat('en-US', {
//     style: 'currency',
//     currency: 'USD'
//   }).format(amount);

//   return `The driver drove ${formattedSpeed} and has to pay ${formattedAmount}`;
// }

// console.log(getFine(130, 300))
// A: The driver drove 130 and has to pay 300
// B: The driver drove 130 mph and has to pay $300.00
// C: The driver drove undefined and has to pay undefined
// D: The driver drove 130.00 and has to pay 300.00
// You4:49 PM
// b
// Aditya Kumar4:50 PM
// b
// Dhananjay Yadav4:50 PM
// What are the three phases of event propagation?
// A: Target > Capturing > Bubbling
// B: Bubbling > Target > Capturing
// C: Target > Bubbling > Capturing
// D: Capturing > Target > Bubbling
// You4:51 PM
// a
// Aditya Kumar4:52 PM
// a
// Dhananjay Yadav4:52 PM
// .How long is cool_secret accessible?
// sessionStorage.setItem('cool_secret', 123);
// A: Forever, the data doesn't get lost.
// B: When the user closes the tab.
// C: When the user closes the entire browser, not only the tab.
// D: When the user shuts off their computer.
// You4:53 PM
// b
// Aditya Kumar4:53 PM
// b
// Dhananjay Yadav4:54 PM
// const emojis = ['🥑', ['✨', '✨', ['🍕', '🍕']]];

// console.log(emojis.flat(1));
// A: ['🥑', ['✨', '✨', ['🍕', '🍕']]]
// B: ['🥑', '✨', '✨', ['🍕', '🍕']]
// C: ['🥑', ['✨', '✨', '🍕', '🍕']]
// D: ['🥑', '✨', '✨', '🍕', '🍕']
// Aditya Kumar4:54 PM
// c
// You4:54 PM
// b
// Dhananjay Yadav4:55 PM
// const randomValue = 21;

// function getInfo() {
//   console.log(typeof randomValue);
//   const randomValue = 'Lydia Hallie';
// }

// getInfo();
// A: "number"
// B: "string"
// C: undefined
// D: ReferenceError
// You4:55 PM
// a
// Aditya Kumar4:55 PM
// c
// Dhananjay Yadav4:56 PM
// const name = 'Lydia Hallie';
// const age = 21;

// console.log(Number.isNaN(name));
// console.log(Number.isNaN(age));

// console.log(isNaN(name));
// console.log(isNaN(age));
// A: true false true false
// B: true false false false
// C: false false true false
// D: false true false true
// Aditya Kumar4:57 PM
// c
// You4:57 PM
// d
// Dhananjay Yadav4:58 PM
// const spookyItems = ['👻', '🎃', '🕸'];
// ({ item: spookyItems[3] } = { item: '💀' });

// console.log(spookyItems);
// A: ["👻", "🎃", "🕸"]
// B: ["👻", "🎃", "🕸", "💀"]
// C: ["👻", "🎃", "🕸", { item: "💀" }]
// D: ["👻", "🎃", "🕸", "[object Object]"]
// You4:59 PM
// a
// Aditya Kumar5:00 PM
// a
// Dhananjay Yadav5:00 PM
// What's the output?
// const name = 'Lydia Hallie';

// console.log(!typeof name === 'object');
// console.log(!typeof name === 'string');
// A: false true
// B: true false
// C: false false
// D: true true
// Aditya Kumar5:01 PM
// b
// You5:02 PM
// b