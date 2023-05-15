// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

const pigIt = str => {
  const PUNCTUATION = ['!', '?', '.', ',']
  const APPENDIX = 'ay'

  const pigLatin = str
    .split(' ')
    .map(word => {
      if (PUNCTUATION.includes(word)) {
        return word
      }
      const pigLatinWord = `${word.slice(1)}${word.slice(0, 1)}${APPENDIX}`
      return pigLatinWord
    })
    .join(' ')

  return pigLatin
}
