// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript

const solution = str => {
  if (str.length % 2 !== 0) {
    str += '_'
  }

  const arr = str.split('')
  const split = []

  while (arr.length) {
    split.push(arr.splice(0, 2).join(''))
  }

  return split
}
