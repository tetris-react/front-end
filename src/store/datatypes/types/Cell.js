/********************************************************
*                         CELL                          *
********************************************************/
export const Cell = function(
  color,
  isActive,
  isLocked,
  x,
  y
) {
  this.color = color;
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

Cell.prototype.lock = function() {
  this.isLocked = true;
};

Cell.prototype.unLock = function() {
  this.isLocked = false;
};

Cell.prototype.coordsMatch = function(x, y) {
  return this.x === x && this.y === y;
};
