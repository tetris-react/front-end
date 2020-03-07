/********************************************************
*                       TETROMINO                       *
********************************************************/
export const Tetromino = function(
  type = '',
  coordinates = [],
  rotationalCoordinate = {},
  orientation = -1
) {
  this.type = type;
  this.coordinates = coordinates;
  this.rotationalCoordinate = rotationalCoordinate;
  this.orientation = orientation;
};

Tetromino.prototype.drop = function() {
  console.log('this.coordinates', this.coordinates);
  this.coordinates = this.coordinates.map(({ x, y }) => {
    return {
      x,
      y: y + 1
    };
  });
  console.log('this.coordinates after', this.coordinates);
  return this;
};

Tetromino.prototype.shiftLeft = function() {
  this.coordinates = this.coordinates.map(({ x, y }) => {
    return {
      x: x - 1,
      y
    };
  });

  return this;
};

Tetromino.prototype.shiftRight = function() {
  this.coordinates = this.coordinates.map(({ x, y }) => {
    return {
      x: x + 1,
      y
    };
  });

  return this;
};

export const tetromino_I = new Tetromino(
  'I',
  [
    { x: 3, y: 0 },
    { x: 4, y: 0 },
    { x: 5, y: 0 },
    { x: 6, y: 0 }
  ],
  { x: 5, y: 0 },
  0
);

export const tetromino_O = new Tetromino(
  'O',
  [
    { x: 4, y: 0 },
    { x: 5, y: 0 },
    { x: 4, y: 1 },
    { x: 5, y: 1 }
  ],
  undefined,
  0
);

export const tetromino_T = new Tetromino(
  'T',
  [
    { x: 4, y: 0 },
    { x: 5, y: 0 },
    { x: 6, y: 0 },
    { x: 5, y: 1 }
  ],
  { x: 5, y: 0 },
  0
);

export const tetromino_S = new Tetromino(
  'S',
  [
    { x: 5, y: 0 },
    { x: 6, y: 0 },
    { x: 4, y: 1 },
    { x: 5, y: 1 }
  ],
  { x: 5, y: 0 },
  0
);

export const tetromino_Z = new Tetromino(
  'Z',
  [
    { x: 4, y: 0 },
    { x: 5, y: 0 },
    { x: 5, y: 1 },
    { x: 6, y: 1 }
  ],
  { x: 5, y: 0 },
  0
);

export const tetromino_J = new Tetromino(
  'J',
  [
    { x: 4, y: 0 },
    { x: 5, y: 0 },
    { x: 6, y: 0 },
    { x: 6, y: 1 }
  ],
  { x: 5, y: 0 },
  0
);

export const tetromino_L = new Tetromino(
  'L',
  [
    { x: 4, y: 0 },
    { x: 5, y: 0 },
    { x: 6, y: 0 },
    { x: 4, y: 1 }
  ],
  { x: 5, y: 0 },
  0
);

export default [
  tetromino_I,
  tetromino_O,
  tetromino_T,
  tetromino_S,
  tetromino_Z,
  tetromino_J,
  tetromino_L
];
