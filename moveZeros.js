// https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

const moveZeros = arr => {
  const noZeros = arr.filter(el => el !== 0)
  const numOfZeros = arr.length - noZeros.length
  const zeros = '0'.repeat(numOfZeros).split('').map(Number)

  return [...noZeros, ...zeros]
}
