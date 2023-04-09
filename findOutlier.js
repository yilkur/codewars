// https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript

const findOutlier = integers => {
  const isEven = num => num === 0 || num % 2 === 0
  const sorted = integers.sort((a, b) => isEven(b) - isEven(a))

  if (isEven(sorted[0]) && isEven(sorted[1])) {
    return sorted.at(-1)
  }
  return sorted[0]
}
