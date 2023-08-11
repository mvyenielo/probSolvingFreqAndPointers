// add whatever parameters you deem necessary & write docstring
/**
 *  inputs are an array of nums, and a num
 * first input includes nums that we want to look at, second input is average
 * input will not be a string for either
 *
 * look into nums of first input, then determine if any pairs of the nums
 * will produce an avg that is equal to the second input
 *
 * do not need need to find all pairs that satisfy this condition
 * only need to find first pair that satisfies it
 *
 * function will return true or false,
 * true means at least one pair with avg equal to 2nd input was found
 * false means no pairs were found
 *
 * multiple point strat?
 * designate a var with first index (0)
 * designate a var with last index (.length-1)
 * assign these vars as indexes to first input
 * determine if these values added and divded by 2 equal 2nd input
 *
 * if true, return true
 *
 * if not true:
 * and the avg is > than 2nd input
 * right pointer is moved left (reduce index by 1)
 *
 * if not true:
 * and avg is < than 2nd input
 * move left point to right (increased index by 1)
 *
 * only runs when pointers are not same (while left < right)
 *
 * function ends with return false
 */

/**
 *
 * @param {array} nums
 * @param {number} avg
 * @returns boolean that determines that a pair of numbers inside
 * nums can produce an average equal to avg
 */
function averagePair(nums, avg) {
  let left = 0;
  let right = nums.length-1;

  while (left < right){
    let numsAverage = getAvg(nums[left],nums[right])
    if (numsAverage === avg){
      return true;
    }else if (numsAverage > avg) {
      right--;
    } else if (numsAverage < avg){
      left++;
    }
  }
  return false;
}

/**
 *
 * @param {number} num1
 * @param {number} num2
 * @returns the average value of both input numbers
 */
function getAvg(num1, num2){
  return (num1 + num2)/2
}