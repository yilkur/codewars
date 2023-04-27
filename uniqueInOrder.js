// https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript

const uniqueInOrder = iterable =>
  [...iterable].filter((item, idx) => item !== iterable[idx + 1])
