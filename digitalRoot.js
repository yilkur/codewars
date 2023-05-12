// https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript

const digitalRoot = n => {
  if (n > 9) {
    const newNum = n
      .toString()
      .split('')
      .map(Number)
      .reduce((acc, val) => acc + val)
    return digitalRoot(newNum)
  }
  return n
}
