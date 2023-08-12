// add whatever parameters you deem necessary & write docstring

/**
 * input is two params one is a number, other param is also a number
 * not strings or objects, array etc
 *
 * want to return if both integers have same freq of digits
 *
 * edge case: weird input ie 01 vs 1
 *
 * freq counter
 *
 * assign vars to turn inputs into strings
 *
 * use func to turn string into objs
 * keys are individual digits
 * values are freq of digit
 *
 * two objs
 *
 * determine if keys in obj 1 have same keys & frequencies as obj 2
 * does this key from obj 1 exist in obj 2
 * is value of key in obj 1 same as obj 2
 *
 *if not true then return false

 else return true;
 *
 *
 */

function sameFrequency(num1, num2) {
 const stringNum1 = `${num1}`;
 const stringNum2 = `${num2}`;

 const num1Obj = getFrequencyCounter(stringNum1);
 const num2Obj = getFrequencyCounter(stringNum2);
console.log(`num1obj is`, num1Obj);
console.log(`num2obj is`, num2Obj);

 for (let num in num1Obj){
  if (num1Obj[num] !== num2Obj[num]) return false;
 }

 return true;

}

function getFrequencyCounter(string){
  const obj = {};

  for (let digit of string){
    obj[digit] = (obj[digit] || 0) + 1;
  }
  return obj;
}