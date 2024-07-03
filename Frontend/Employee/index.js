// console.log("hello");

// const filer = fetch("file.txt");
// console.log(filer);

// const fetchfile = async () => {
//   const filet = await fetch("file.txt");
//   console.log(await filet.text());
// };
// fetchfile();

// const getCountries = (num) => {
//   const countries = ["usa", "india", "china"];
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const country = countries[num];
//       if (country) {
//         resolve(country);
//       } else {
//         reject("no country found");
//       }
//     }, 1000);
//   });
// };

// const getStates =  (country) => {
//   const states = {
//     usa: ["alaska", "arizona", "ohio"],
//     india: ["kerala", "tamil nadu"],
//     china: ["shangshing"],
//   };
//   return new Promise((resolve, reject) => {
//     if (states[country]) {
//       resolve(states[country]);
//     } else {
//       reject("NO state found");
//     }
//   });
// };

// const countries = getCountries(1);
// countries
//   .then((value) => {
//     console.log("country is ", value);
//     return getStates(value);
//   })
//   .then((state) => {
//     console.log("the state is ", state);
//     return state;
//   })
//   .catch((err) => {
//     console.log("the error is", err);
//   });

// (async () => {
  
//   try {
//     const country = await getCountries(1);
//     const state = await getStates(country);
//     console.log("country", country, "state", state);
//   } catch (e) {
//     console.error("the error is ", e);
//   }
// })();
// // let a =34;
// // let b = 35;
// // console.log(a+b)
// // function eo(num){if(num>=0){console.log("positive");} else if(num<0){console.log("negative")} else{console.log("0")}}

// let day = "Sun";
// let mssg = "";
// switch (day) {
//   case "Sat":
//   case "Sun":
//     mssg = "today is " + day + " weekend";
//     break;
//   default:
//     mssg = "today is " + day;
// }

// console.log(mssg);
// let age = 9;
// age >= 18 ? console.log("can vote") : console.log("cant vote");
// let canvote = age >= 18 ? "can vote" : "cant vote";
// console.log("second", canvote);

// let a = ["a", "b", "c"];
// let b = {
//   name: "jojo",
//   age: 18,
// };
// for (let i of a) {
//   console.log(i);
// }
// for (let i in a) {
//   console.log(i);
// }
// for (let j in b) {
//   console.log(j, b[j]);
// }

// const op = function multipley(a, b) {
//   return a * b;
// };
// console.log(op(5, 4));

// const outerfunction = (inccount) => {
//   let count = 0;
//   const innerfunction = () => {
//     count = count + inccount;
//     console.log(count);
//   };
//   return innerfunction;
// };

// const thing = outerfunction(10);
// thing();
// thing();
// thing();
// thing();
// let thing2 = outerfunction(4);
// thing2();
// thing2();
// thing2();
// thing2();

// const opengpay = (callback) => {
//   console.log("open gpay ");
//   setTimeout(() => {
//     console.log("opened gpay");
//     callback();
//   }, 3000);
// };

// const scanqr = (callback) => {
//   console.log("open scanner");
//   setTimeout(() => {
//     console.log("scanned qr");
//     callback();
//   }, 2000);
// };

// const payqr = (callback) => {
//   console.log("Enter amount");
//   setTimeout(() => {
//     console.log("payed");
//   });
// };

// opengpay(() => {
//   scanqr(() => {
//     payqr();
//   });
// });
// console.log('start');
// const promise1 = new Promise((resolve, reject) => {
//   console.log(1)
// })
// console.log('end');

// console.log('start');
// const promise1 = new Promise((resolve, reject) => {
//   console.log(1)
//   resolve(2)
//   console.log(3)
// })
// promise1.then(res => {
//   console.log(res)
// })
// console.log('end');

// console.log('start');
// const promise1 = new Promise((resolve, reject) => {
//   console.log(1)
// })
// promise1.then(res => {
//   console.log(2)
// })
// console.log('end');
// console.log('start')
// Promise.resolve(1).then((res) => {
//   console.log(res)
// })
// Promise.resolve(2).then((res) => {
//   console.log(res)
// })
// console.log('end')

// const promise = new Promise((resolve, reject) => {
//   console.log(1);
  
//   console.log(2);
//   resolve("smthng")
// });
// setTimeout(() => {
//   console.log("timerStart");
  
//   console.log("timerEnd");
// }, 0);
// promise.then((res) => {
//   console.log(res);
// });
// console.log(4);
console.log('start');
const promise1 = Promise.resolve().then(() => {
  console.log('promise1');
  const timer1 = setTimeout(() => {
    console.log('timer1')
  }, 0)
});
const timer2 = setTimeout(() => {
  console.log('timer2')
  const promise2 = Promise.resolve().then(() => {
    console.log('promise2')
  })
}, 0)
console.log('end');