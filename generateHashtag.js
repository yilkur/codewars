// https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript

const generateHashtag = str => {
  const words = str.trim().split(/\s+/)
  const LIMIT = 140

  if (str.length === 0 || words[0].length === 0) {
    return false
  }

  const hashtag = `#${words
    .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join('')}`

  return hashtag.length > LIMIT ? false : hashtag
}
