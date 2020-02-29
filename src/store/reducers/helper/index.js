export const new2DArray = (numRows, numColumns, newCell) =>
  new Array(numRows)
    .fill(0)
    .map((_, y) =>
      new Array(numColumns)
        .fill(0)
        .map((_, x) => ({ ...newCell, x, y }))
    );

export const map2DArray = (matrix, cb) =>
  matrix.map(columns =>
    columns.map(cell => {
      cb(cell);
      return cell;
    })
  );

export const dropActiveTetromino = (
  matrix,
  activeTetroCoords
) => {
  // unflags all active cells
  matrix = matrix.map(columns =>
    columns.map(cell => {
      if (cell.isActive) cell.isActive = false;

      activeTetroCoords.forEach(
        coord =>
          (cell = {
            ...cell,
            isActive:
              cell.x === coord.x && cell.y === coord.y
          })
      );

      return cell;
    })
  );

  activeTetroCoords.forEach(coord => {
    matrix[coord.y][coord.x] = {
      ...matrix[coord.y][coord.x],
      isActive: true
    };
  });

  return matrix;
};
