// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript

const duplicateEncode = word => {
  const lower = word.toLowerCase()
  const seen = new Map()
  let duplicateLetters = ''

  for (const letter of lower) {
    if (seen.has(letter)) {
      duplicateLetters += letter
    } else {
      seen.set(letter)
    }
  }

  const encoded = lower
    .split('')
    .map(letter => {
      if (duplicateLetters.indexOf(letter) > -1) {
        return ')'
      }
      return '('
    })
    .join('')

  return encoded
}
