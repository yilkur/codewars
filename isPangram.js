// https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript

const isPangram = string => {
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ]

  const lower = string.toLowerCase()
  return alphabet.every(letter => lower.includes(letter)) 
}
