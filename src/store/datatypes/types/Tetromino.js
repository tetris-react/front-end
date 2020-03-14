/********************************************************
*                       TETROMINO                       *
********************************************************/
export const Tetromino = function(
  type = '',
  coordinates = [],
  rotationalIndex = 0,
  rotationalDistances = []
) {
  this.type = type;
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
  // this.coordinates.forEach(coord => {
  //   console.log('current: ', coord.x, coord.y);
  // });
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

  // nextCoordinates.forEach(coord => {
  //   console.log('next  : ', coord.x, coord.y);
  // });
  // this.coordinates.forEach(coord => {
  //   console.log('after: ', coord.x, coord.y);
  // });

  return nextCoordinates;
};

Tetromino.prototype.unshift = function(direction) {
  this.coordinates = this.coordinates.map(coord => {
    switch (direction) {
      case 'down':
        coord.y -= 1;
        return coord;
      case 'left':
        coord.x += 1;
        return coord;
      case 'right':
        coord.x -= 1;
        return coord;
      default:
        return coord;
    }
  });

  return this;
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

/********************************************************
*                      TETROMINOS                      *
********************************************************/
// export const tetromino_I = new Tetromino(
//   data.I.type,
//   data.I.coordinates,
//   data.I.rotationalIndex,
//   data.I.rotationalDistances
// );

// export const tetromino_O = new Tetromino(
//   data.O.type,
//   data.O.coordinates,
//   data.O.rotationalIndex,
//   data.O.rotationalDistances
// );

// export const tetromino_T = new Tetromino(
//   data.T.type,
//   data.T.coordinates,
//   data.T.rotationalIndex,
//   data.T.rotationalDistances
// );

// export const tetromino_S = new Tetromino(
//   data.S.type,
//   data.S.coordinates,
//   data.S.rotationalIndex,
//   data.S.rotationalDistances
// );

// export const tetromino_Z = new Tetromino(
//   data.Z.type,
//   data.Z.coordinates,
//   data.Z.rotationalIndex,
//   data.Z.rotationalDistances
// );

// export const tetromino_J = new Tetromino(
//   data.J.type,
//   data.J.coordinates,
//   data.J.rotationalIndex,
//   data.J.rotationalDistances
// );

// export const tetromino_L = new Tetromino(
//   data.L.type,
//   data.L.coordinates,
//   data.L.rotationalIndex,
//   data.L.rotationalDistances
// );

// export default [
//   tetromino_I,
//   tetromino_O,
//   tetromino_T,
//   tetromino_S,
//   tetromino_Z,
//   tetromino_J,
//   tetromino_L
// ];
