// https://www.codewars.com/kata/55c45be3b2079eccff00010f/javascript

const order = words =>
  words
    .split(' ')
    .sort((a, b) => Number(a.match(/[0-9]+/g)) - Number(b.match(/[0-9]+/g)))
    .join(' ')
