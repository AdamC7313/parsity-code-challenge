const findSum = function(array) {
  return array.reduce((a, b) => a + b, 0)
};

const findFrequency = function(array) {
  let answer = {
    most: null,
    least: null
  }

  //establish variables
  let countimost = 0;
  let most_frequent;

  //iterate through each item in the array
  for (let i = 0; i < array.length; i++){
    let countjmost = 0;

    //iterate through each item in the array and compare it to the current [i] item
    for (let j = 0; j < array.length; j++) {
      if (array[i] == array[j])
      //if it matches, increment j
        countjmost++;
    }
    //if that item has more counts than currently logged, replace the most frequent item with that one.
    if (countjmost > countimost) {
      countimost = countjmost;
      most_frequent = array[i];
    }
  }
  //replace most property with most_frequent variable
  answer.most = most_frequent
  
    //establish variables
  let countileast = 1000;
  let least_frequent;

  //iterate through each item in the array
  for (let i = 0; i < array.length; i++){
    let countjleast = 0;

    //iterate through each item in the array and compare it to the current [i] item
    for (let j = 0; j < array.length; j++) {
      if (array[i] == array[j])
      //if it matches, increment j
        countjleast++;
    }
    //if that item has less counts than currently logged, replace the most frequent item with that one.
    if (countjleast < countileast) {
      countileast = countjleast;
      least_frequent = array[i];
    }
  }

  answer.least = least_frequent;

  return answer;

};

const isPalindrome = function(str) {
  if(str == str.split('').reverse().join('')) {
    return true;
  } else {
    return false;
  }
};

const largestPair = function(array) {
  let largest = 0;
  //iterate through array
  for (let i = 0; i < array.length; i++) {
    let pair = array[i]*array[i + 1]
    //replace largest var with pair if it is greater than currently logged number
    if (pair > largest) {
      largest = pair;
    }
  }
  return largest;
};

const removeParenth = function(str) {
  let removed = str.replace(')','').replace('(','')
  return removed;
};

const scoreScrabble = function(str) {
  //establish object with letter scores
  let letter_score = {
  a: 1, e: 1, i: 1, o: 1, u: 1, l: 1, n: 1, r: 1, s: 1, t: 1, d: 2, g: 2, b: 3, c: 3, m: 3, p: 3, f: 4, h: 4, v: 4, w: 4, y: 4, k: 5, j: 8, x: 8, q: 10, z: 10
  }
  //split string to array, map a new array with score of each letter, than reduce to sum up total score
  let total = str.split('').map(letter => letter_score[letter]).reduce((a, b) => a + b);

  return total;
};
