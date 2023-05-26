const cakes = (recipe, available) => {
  let maxNumOfCakes = Number.POSITIVE_INFINITY

  for (const recipeItem in recipe) {
    if (!available[recipeItem]) {
      return 0
    }

    const numPossible = Math.floor(available[recipeItem] / recipe[recipeItem])

    if (numPossible < maxNumOfCakes) {
      maxNumOfCakes = numPossible
    }
  }

  return maxNumOfCakes
}
