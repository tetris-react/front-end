/********************************************************
*                         CELL                          *
********************************************************/
export const Cell = function(isActive, isLocked, x, y) {
  this.isActive = isActive;
  this.isLocked = isLocked;
  this.x = x;
  this.y = y;
};

Cell.prototype.activate = function() {
  this.isActive = true;
};

Cell.prototype.deactivate = function() {
  this.isActive = false;
};

Cell.prototype.coordsAreEqual = function(x, y) {
  return this.x === x && this.y === y;
};
