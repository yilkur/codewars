// https://www.codewars.com/kata/59f70440bee845599c000085/train/javascript

const findHack = arr => {
  const scores = {
    A: 30,
    B: 20,
    C: 10,
    D: 5,
  }
  const SCORE_CAP = 200
  const BONUS = 20

  const hackedStudents = arr
    .filter(student => {
      const [name, score, grades] = student
      let actualScore = grades.reduce(
        (totalScore, score) => totalScore + (scores[score] || 0),
        0
      )

      const gradesAboveB = grades.filter(
        grade => grade === 'B' || grade === 'A'
      )
      if (grades.length >= 5 && grades.length === gradesAboveB.length) {
        actualScore += BONUS
      }

      if (score > SCORE_CAP || actualScore !== score) {
        return name
      }
    })
    .map(student => student[0])

  return hackedStudents
}
