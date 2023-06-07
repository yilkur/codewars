const anagramDifference = (w1, w2) => {
  const stack = {}

  for (const c1 of w1) {
    stack[c1] > 0 ? stack[c1]++ : (stack[c1] = 1)
  }

  let counter = 0

  for (const c2 of w2) {
    stack[c2] > 0 ? stack[c2]-- : counter++
  }

  const result =
    counter + Object.values(stack).reduce((sum, curr) => sum + curr, 0)

  return result
}
