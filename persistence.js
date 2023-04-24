// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript

const persistence = num => {
  if (num < 10) {
    return 0
  }

  const getDigitProduct = number =>
    number
      .toString()
      .split('')
      .reduce((acc, num) => acc * +num, 1)
  let persistenceRating = 1
  let product = getDigitProduct(num)

  while (product > 9) {
    product = getDigitProduct(product)
    persistenceRating++
  }

  return persistenceRating
}
