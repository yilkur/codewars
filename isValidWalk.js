// https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript

const isValidWalk = walk => {
  if (walk.length !== 10) {
    return false
  }

  const coordinates = {
    x: 0,
    y: 0,
  }

  for (const direction of walk) {
    switch (direction) {
      case 'n':
        coordinates.y++
        break
      case 'w':
        coordinates.x++
        break
      case 's':
        coordinates.y--
        break
      case 'e':
        coordinates.x--
        break
      default:
        console.error(`${direction} is an invalid direction`)
    }
  }

  const isAtStart = coordinates.x === 0 && coordinates.y === 0
  return isAtStart
}
