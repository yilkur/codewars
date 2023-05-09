// https://www.codewars.com/kata/517abf86da9663f1d2000003/solutions/javascript

const toCamelCase = str => {
  if (str.length === 0) {
    return ''
  }

  const arr = str.split(/[-_]/)
  const firstWord = arr[0]
  const otherWords = arr.slice(1)

  let camelCasedWords = otherWords
    .map(word => word.slice(0, 1).toUpperCase() + word.slice(1))
    .join('')
  return firstWord + camelCasedWords
}
