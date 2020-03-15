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
      this.cell(x, y).isLocked
    ) {
      inBounds = false;
    }
  });
  return inBounds;
};

Matrix.prototype.notBlocked = function(coordinates) {
  let notBlocked = true;

  coordinates.forEach(({ x, y }) => {
    if (this.cell(x, y).isLocked) notBlocked = false;
  });

  return notBlocked;
};

Matrix.prototype.unlockCoordinates = function(coordinates) {
  coordinates.forEach(({ x, y }) => {
    this.cell(x, y).isLocked = false;
  });
};

Matrix.prototype.lockCoordinates = function(coordinates) {
  coordinates.forEach(({ x, y }) => {
    this.cell(x, y).isLocked = true;
  });
};

Matrix.prototype.activateCoordinates = function(
  coordinates,
  color
) {
  coordinates.forEach(({ x, y }) => {
    this.cell(x, y).isActive = true;
    this.cell(x, y).color = color;
  });
};

Matrix.prototype.deactivateCoordinates = function(
  coordinates
) {
  coordinates.forEach(({ x, y }) => {
    this.cell(x, y).isActive = false;
  });
};

Matrix.prototype.cell = function(x, y) {
  return this.matrix[y][x];
};

Matrix.prototype.filterEmptyRows = function() {
  this.matrix.filter((row, i, rows) => {});
};

Matrix.prototype.deleteRows = function(rows) {
  rows
    .filter((row, i, rows) => rows.indexOf(row) === i)
    .forEach(row => {
      this.matrix[row].forEach(cell => {
        cell.isActive = false;
        cell.isLocked = false;
      });
    });

  return this;
};

Matrix.prototype.deleteFilledRows = function(coordinates) {
  const filledRows = coordinates
    // map for just y coordinate values
    .map(coord => coord.y)
    // filter out duplicate y coordinates
    .filter((y, i, yCoords) => yCoords.indexOf(y) === i)
    // filter out y coordinates for filled rows
    .filter(y => this.rowFilled(y));

  console.log('filledRows', filledRows);

  // return a filtered matrix with the filled rows removed
  return this.matrix.filter((_, i) => {
    console.log('i', i);
    console.log(filledRows.includes(i));
    return !filledRows.includes(i);
  });
};

Matrix.prototype.rowFilled = function(row) {
  let filled = true;

  this.matrix[row].forEach(cell => {
    if (cell.isLocked === false) filled = false;
  });

  return filled;
};

Matrix.prototype.rowEmpty = function(row) {
  let empty = true;

  this.matrix[row].forEach(cell => {
    if (cell.isLocked) empty = false;
  });

  return empty;
};

Matrix.prototype.collapse = function() {};
