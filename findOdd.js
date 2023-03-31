// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

const findOdd = A => {
  const map = A.reduce((acc, num) => {
    acc[num] ? acc[num]++ : acc[num] = 1
    return acc
  }, {})
  
  const oddNum = Number(Object.entries(map)
    .find(([_, value]) => value % 2 !== 0)[0])
  
  return oddNum
}