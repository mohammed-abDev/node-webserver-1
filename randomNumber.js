//* ******Questions-5********
//? A
function random() {
  let randNum = Math.floor(Math.random()*100+1);
  return randNum;
}
//? B
let result = random();
//? C
console.log("Random number:", result);
//? D
module.exports = { random };


