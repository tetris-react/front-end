/********************************************************
*                       TETROMINO                       *
********************************************************/
export const Tetromino = function(
  type = '',
  color = '#000000',
  coordinates = [],
  rotationalIndex = 0,
  rotationalDistances = []
) {
  this.type = type;
  this.color = color;
  this.coordinates = coordinates;
  this.rotationalIndex = rotationalIndex;
  this.rotationalDistances = rotationalDistances;
};

Tetromino.prototype.shift = function(direction) {
  this.coordinates = this.coordinates.map(coord => {
    switch (direction) {
      case 'down':
        coord.y += 1;
        return coord;
      case 'left':
        coord.x -= 1;
        return coord;
      case 'right':
        coord.x += 1;
        return coord;
      default:
        return coord;
    }
  });

  return this;
};

Tetromino.prototype.getNextCoords = function(direction) {
  let nextCoordinates = deepCopy(this.coordinates);

  nextCoordinates = nextCoordinates.map(coord => {
    switch (direction) {
      case 'down':
        coord.y += 1;
        return coord;
      case 'left':
        coord.x -= 1;
        return coord;
      case 'right':
        coord.x += 1;
        return coord;
      default:
        return coord;
    }
  });

  return nextCoordinates;
};

Tetromino.prototype.getNextRotationCoords = function() {
  const nextDistance = deepCopy(
    this.rotationalDistances[this.rotationalIndex]
  );

  let nextCoordinates = deepCopy(this.coordinates);

  nextCoordinates = nextCoordinates.map((coord, i) => {
    coord.x += nextDistance[i].x;
    coord.y += nextDistance[i].y;
    return coord;
  });

  return nextCoordinates;
};

Tetromino.prototype.rotate = function() {
  const distance = this.rotationalDistances[
    this.rotationalIndex
  ];

  this.coordinates = this.coordinates.map((coord, i) => {
    coord.x += distance[i].x;
    coord.y += distance[i].y;
    return coord;
  });

  this.rotationalIndex =
    this.rotationalIndex === 3 ? 0 : ++this.rotationalIndex;

  return this;
};

Tetromino.prototype.unrotate = function() {
  this.rotationalIndex =
    this.rotationalIndex === 0 ? 3 : --this.rotationalIndex;

  const distance = this.rotationalDistances[
    this.rotationalIndex
  ];

  this.coordinates = this.coordinates.map((coord, i) => {
    coord.x += distance[i].x * -1;
    coord.y += distance[i].y * -1;
    return coord;
  });

  return this;
};

function deepCopy(object) {
  return JSON.parse(JSON.stringify(object));
}
