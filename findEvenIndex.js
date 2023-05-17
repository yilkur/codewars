// https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript

const findEvenIndex = arr => {
  const totalSum = arr.reduce((acc, val) => acc + val, 0)

  let i = 0
  let leftSum = 0
  let rightSum = totalSum

  while (i < arr.length) {
    rightSum -= arr[i]

    if (leftSum === rightSum) {
      return i
    }

    leftSum += arr[i]
    i++
  }

  return -1
}
