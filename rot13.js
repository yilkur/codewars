// https://www.codewars.com/kata/52223df9e8f98c7aa7000062

const rot13 = message => {
  const encrypted = [...message].map(char => {
    const charcode = char.charCodeAt(0)
    const isUpperCase = charcode >= 65 && charcode <= 90
    const isLowerCase = charcode >= 97 && charcode <= 122
    
    if (isUpperCase) {
      return String.fromCharCode((charcode - 65 + 13) % 26 + 65)
    } 
    
    if (isLowerCase) {
      return String.fromCharCode((charcode - 97 + 13) % 26 + 97)
    }
    
    return char
  })
  
  return encrypted.join('')
}