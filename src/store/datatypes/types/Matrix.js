/********************************************************
*                       MATRIX                          *
********************************************************/
export const Matrix = function(
  numRows,
  numColumns,
  value = {}
) {
  this.numRows = numRows;
  this.numColumns = numColumns;
  this.matrix = [...Array(this.numRows)].map(() =>
    [...Array(this.numColumns)].fill(value)
  );
};

/********************************************************
*                       METHODS                         *
********************************************************/
Matrix.prototype.map2D = function(callback) {
  this.matrix = this.matrix.map((column, y) => {
    return column.map((cell, x) => {
      return callback(cell, x, y);
    });
  });

  return this;
};

Matrix.prototype.forEach2D = function(callback) {
  this.matrix.forEach((column, y) => {
    column.forEach((cell, x) => {
      callback(cell, x, y);
    });
  });

  return this;
};

Matrix.prototype.flatten = function() {
  return [].concat(...this.matrix);
};

Matrix.prototype.inBounds = function(coordinates) {
  let inBounds = true;

  coordinates.forEach(({ x, y }) => {
    if (
      x < 0 ||
      x >= this.numColumns ||
      y < 0 ||
      y >= this.numRows ||
      this.cell(x, y).isOccupied
    ) {
      inBounds = false;
    }
  });
  return inBounds;
};

Matrix.prototype.cell = function(x, y) {
  return this.matrix[y][x];
};
