// https://www.codewars.com/kata/57f609022f4d534f05000024/train/javascript

const stray = numbers => {
  const seen = {}

  for (const num of numbers) {
    num in seen ? seen[num]++ : (seen[num] = 1)
  }

  for (const key in seen) {
    if (seen[key] === 1) {
      return +key
    }
  }
}
