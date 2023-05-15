const areAdjacentCards = (index1: number, index2: number, rows: number, columns: number) => {
  const validIndexes: number[] = []
  if ((index1 + 1) % columns !== 0) {
    validIndexes.push(index1 + 1)
  } if ((index1 + 1) % columns !== 1) {
    validIndexes.push(index1 - 1)
  }
  validIndexes.push(index1 + columns, index1 - columns)
  return !!validIndexes.filter(i => i >= 0 && i < rows * columns)
    .includes(index2)
}

export {
  areAdjacentCards
}
