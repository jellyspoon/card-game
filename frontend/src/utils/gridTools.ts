const areAdjacentCards = (index1: number, index2: number, rows: number, columns: number) => {
  const validIndexes: number[] = getAdjacentIndexes(index1, rows, columns)
  return !!validIndexes.filter(i => i >= 0 && i < rows * columns)
    .includes(index2)
}

const getHorizontalAdjacentIndexes = (index1: number, rows: number, columns: number) => {
  const validIndexes: number[] = []
  if ((index1 + 1) % columns !== 0) {
    validIndexes.push(index1 + 1)
  } if ((index1 + 1) % columns !== 1) {
    validIndexes.push(index1 - 1)
  }
  return validIndexes.filter(i => i >= 0 && i < rows * columns)
}

const getVerticalAdjacentIndexes = (index1: number, rows: number, columns: number) => {
  const validIndexes = []
  validIndexes.push(index1 + columns, index1 - columns)
  return validIndexes.filter(i => i >= 0 && i < rows * columns)
}

const getAdjacentIndexes = (index1: number, rows: number, columns: number) => {
  const validIndexes = getHorizontalAdjacentIndexes(index1, rows, columns)
  validIndexes.push(...getVerticalAdjacentIndexes(index1, rows, columns))
  return validIndexes.filter(i => i >= 0 && i < rows * columns)
}

const getCoords = (index1: number, rows: number, columns: number) => {
  return [index1 % columns, Math.floor(index1 / rows)]
}

const areSameRow = (index1: number, index2: number, rows: number, columns: number) => {
  return getCoords(index1, rows, columns)[1] === getCoords(index2, rows, columns)[1]
}

const areSameCol = (index1: number, index2: number, rows: number, columns: number) => {
  return getCoords(index1, rows, columns)[0] === getCoords(index2, rows, columns)[0]
}

const isEndOfRow = (index1: number, rows: number, columns: number) => {
  const [x] = getCoords(index1, rows, columns)
  return x === 0 || x === columns - 1
}

const isEndOfColumn = (index1: number, rows: number, columns: number) => {
  const [, y] = getCoords(index1, rows, columns)
  return y === 0 || y === rows - 1
}

const coordsToIndex = (coords: [number, number], rows: number) => {
  return coords[0] + coords[1] * rows
}

const shiftGrid = (indexFrom: number, indexTo: number, rows: number, columns: number, grid: any[]): any[] => {
  const newGrid = [...grid]
  const fromCoords = getCoords(indexFrom, rows, columns)
  const toCoords = getCoords(indexTo, rows, columns)
  const oppositeCoords = [(fromCoords[0] + (fromCoords[0] - toCoords[0])), (fromCoords[1] + (fromCoords[1] - toCoords[1]))] as [number, number]
  const oppositeIndex = coordsToIndex(oppositeCoords, rows)
  if (!areAdjacentCards(indexFrom, indexTo, rows, columns)) {
    return newGrid
  }
  newGrid[indexTo] = grid[indexFrom]
  newGrid[indexFrom] = undefined
  if (areSameRow(indexFrom, indexTo, rows, columns) && !isEndOfRow(indexFrom, rows, columns)) {
    return shiftGrid(oppositeIndex, indexFrom, rows, columns, newGrid)
  }
  if (areSameRow(indexFrom, indexTo, rows, columns) && !isEndOfColumn(indexFrom, rows, columns)) {
    return shiftGrid(oppositeIndex, indexFrom, rows, columns, newGrid)
  }
  return newGrid
}

export {
  areAdjacentCards,
  getAdjacentIndexes,
  getCoords,
  areSameRow,
  areSameCol,
  isEndOfRow,
  isEndOfColumn,
  shiftGrid
}
