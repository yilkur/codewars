// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript

const duplicateCount = text => {
  const lower = text.toLowerCase()
  const map = {}

  for (const char of lower) {
    map[char] ? map[char]++ : (map[char] = 1)
  }

  let count = 0
  for (const char in map) {
    if (map[char] > 1) {
      count++
    }
  }

  return count
}
