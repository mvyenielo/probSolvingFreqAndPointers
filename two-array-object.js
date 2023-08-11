/**
 * create an object with keys that are the values of the first array input, and
 * values made up of the values from the second array input
 * input: two arrays
 * output: object made up of key(first array)/value(second array) pairs
 *
 * edge cases: empty arrays, missing arguments
 *
 * take each value from the first array, match it to the value in the second array
 * that has the same index
 * Go through each index of the first array to create keys, and if there aren't enough
 * keys, just ignore the rest of the values,
 * If there enough values, the rest of the keys have a value of null
 * return the object created
 *
 * create an empty object variable
 * loop through first array
 * set key of empty object to first array val, value is val in second array
 * at same index
 *
 * if the first array is longer than the second array, assign the rest of the keys
 * a value of null
 *
 */

/**
 *
 * @param {array} keyList
 * @param {array} valueList
 * @returns an object with keys assigned from the vals in the first array, and values
 * from vals in second array
 */

function twoArrayObject(keyList, valueList) {

  const keyValuePairs = {};

  for (let i = 0; i < keyList.length; i++) {

    if (i > valueList.length - 1) {
      keyValuePairs[keyList[i]] = null;
    } else {
      keyValuePairs[keyList[i]] = valueList[i];
    }

  }

  return keyValuePairs;
}
