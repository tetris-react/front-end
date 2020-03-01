export const tetromino_I = {
  type: 'I',
  spawnCoordinates: [
    { x: 3, y: 0 },
    { x: 4, y: 0 },
    { x: 5, y: 0 },
    { x: 6, y: 0 }
  ],
  rotationalCoordinate: { x: 5, y: 0 },
  orientation: 0
};

export const tetromino_O = {
  type: 'O',
  initialCoordinates: [
    { x: 4, y: 0 },
    { x: 5, y: 0 },
    { x: 4, y: 1 },
    { x: 5, y: 1 }
  ],
  rotationalCoordinate: null,
  orientation: 0
};

export const tetromino_T = {
  type: 'T',
  initialCoordinates: [
    { x: 4, y: 0 },
    { x: 5, y: 0 },
    { x: 6, y: 0 },
    { x: 7, y: 1 }
  ],
  rotationalCoordinate: { x: 5, y: 0 },
  orientation: 0
};

export const tetromino_S = {
  type: 'S',
  initialCoordinates: [
    { x: 5, y: 0 },
    { x: 6, y: 0 },
    { x: 4, y: 1 },
    { x: 5, y: 1 }
  ],
  rotationalCoordinate: { x: false, y: 0 },
  orientation: 0
};

export const tetromino_Z = {
  type: 'Z',
  initialCoordinates: [
    { x: 4, y: 0 },
    { x: 5, y: 0 },
    { x: 5, y: 1 },
    { x: 6, y: 1 }
  ],
  rotationalCoordinate: { x: 5, y: 0 },
  orientation: 0
};

export const tetromino_J = {
  type: 'J',
  initialCoordinates: [
    { x: 4, y: 0 },
    { x: 5, y: 0 },
    { x: 6, y: 0 },
    { x: 6, y: 1 }
  ],
  rotationalCoordinate: { x: 5, y: 0 },
  orientation: 0
};

export const tetromino_L = {
  type: 'L',
  initialCoordinates: [
    { x: 4, y: 0 },
    { x: 5, y: 0 },
    { x: 6, y: 0 },
    { x: 4, y: 1 }
  ],
  rotationalCoordinate: { x: 5, y: 0 },
  orientation: 0
};

export default [
  tetromino_I,
  tetromino_O,
  tetromino_T,
  tetromino_S,
  tetromino_Z,
  tetromino_J,
  tetromino_L
];

// class Tetromino {
//   constructor(type, initialCoordinates, rotationalCoordinate) {
//     this.type = type;
//     this.initialCoordinates = initialCoordinates;
//     this.rotationalCoordinate = rotationalCoordinate;
//   }
// }

// class Tetromino_I extends Tetromino {
//   constructor(type, initialCoordinates, rotationalCoordinate) {
//     super(type, initialCoordinates, rotationalCoordinate, position);
//     this.orientation = 0;
//   }

//   rotateLeft() {

//   }
// }

// const tetromino_I = new Tetromino('I', [
//   { x: 3, y: 0 },
//   { x: 4, y: 0 },
//   { x: 5, y: 0 },
//   { x: 6, y: 0 }
// ]);

// const tetromino_O = new Tetromino('O', [
//   { x: 4, y: 0 },
//   { x: 5, y: 0 },
//   { x: 4, y: 1 },
//   { x: 5, y: 1 }
// ]);

// const tetromino_T = new Tetromino('T', [
//   { x: 4, y: 0 },
//   { x: 5, y: 0 },
//   { x: 6, y: 0 },
//   { x: 7, y: 1 }
// ]);

// const tetromino_S = new Tetromino('S', [
//   { x: 5, y: 0 },
//   { x: 6, y: 0 },
//   { x: 4, y: 1 },
//   { x: 5, y: 1 }
// ]);

// const tetromino_Z = new Tetromino('Z', [
//   { x: 4, y: 0 },
//   { x: 5, y: 0 },
//   { x: 5, y: 1 },
//   { x: 6, y: 1 }
// ]);

// const tetromino_J = new Tetromino('J', [
//   { x: 4, y: 0 },
//   { x: 5, y: 0 },
//   { x: 6, y: 0 },
//   { x: 6, y: 1 }
// ]);

// const tetromino_L = new Tetromino('L', [
//   { x: 4, y: 0 },
//   { x: 5, y: 0 },
//   { x: 6, y: 0 },
//   { x: 4, y: 1 }
// ]);
