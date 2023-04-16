// https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript

const alphabetPosition = text =>
  text
    .toLowerCase()
    .replace(/[^a-z]/g, '')
    .split('')
    .map(char => char.charCodeAt(0) - 96)
    .join(' ')
