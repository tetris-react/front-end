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

Matrix.prototype.map2D = function(callback) {
  this.matrix = this.matrix.map((column, y) => {
    return column.map((cell, x) => {
      return callback(cell, x, y);
    });
  });

  return this;
};

Matrix.prototype.flatten = function() {
  return [].concat(...this.matrix);
};
