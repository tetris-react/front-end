/********************************************************
*                       TETROMINO                       *
********************************************************/
export const Tetromino = function(
  type = '',
  coordinates = [],
  indexOfRotation = -1,
  orientation = -1
) {
  this.type = type;
  this.coordinates = coordinates;
  this.indexOfRotation = indexOfRotation;
  this.orientation = orientation;
};

Tetromino.prototype.shift = function(direction) {
  this.coordinates = this.coordinates.map(coordinates => {
    switch (direction) {
      case 'down':
        return {
          x: coordinates.x,
          y: ++coordinates.y
        };
      case 'left':
        return {
          x: --coordinates.x,
          y: coordinates.y
        };
      case 'right':
        return {
          x: ++coordinates.x,
          y: coordinates.y
        };
      default:
        return coordinates;
    }
  });

  return this;
};

/********************************************************
*                      TETROMINOS                      *
********************************************************/
export const tetromino_I = new Tetromino(
  'I',
  [
    { x: 3, y: 0 },
    { x: 4, y: 0 },
    { x: 5, y: 0 },
    { x: 6, y: 0 }
  ],
  2,
  0
);

tetromino_I.rotate = function() {
  console.log('this.orientation', this.orientation);
  let distance_x = this.orientation === 0 ? 1 : -1;
  let distance_y = this.orientation === 0 ? 1 : -1;

  this.coordinates = this.coordinates.map(coord => {
    console.log('coord', coord);
    // shift left
    coord.x += this.orientation === 0 ? 1 : -1;

    //rotate counter-clockwise
    coord.x += distance_x;
    coord.y += distance_y;

    // adjust distance
    distance_x += this.orientation === 0 ? -1 : 1;
    distance_y += this.orientation === 0 ? -1 : 1;

    return coord;
  });

  this.orientation = this.orientation === 0 ? 1 : 0;

  return this;
};

export const tetromino_O = new Tetromino(
  'O',
  [
    { x: 4, y: 0 },
    { x: 5, y: 0 },
    { x: 4, y: 1 },
    { x: 5, y: 1 }
  ],
  -1,
  0
);

export const tetromino_T = new Tetromino(
  'T',
  [
    { x: 4, y: 0 },
    { x: 5, y: 1 },
    { x: 6, y: 0 },
    { x: 5, y: 0 }
  ],
  1,
  0
);

tetromino_T.rotate = function() {
  const distances = [
    { x: 1, y: 1 },
    { x: 1, y: -1 },
    { x: -1, y: -1 },
    { x: -1, y: 1 }
  ];

  let distanceIndex = this.orientation;

  this.coordinates = this.coordinates.map((coord, i) => {
    if (distanceIndex > 3) distanceIndex = 0;

    if (i !== 3) {
      coord.x += distances[distanceIndex].x;
      coord.y += distances[distanceIndex].y;
    }

    distanceIndex++;

    return coord;
  });

  this.orientation =
    this.orientation === 3 ? 0 : ++this.orientation;

  return this;
};

export const tetromino_S = new Tetromino(
  'S',
  [
    { x: 5, y: 0 },
    { x: 6, y: 0 },
    { x: 4, y: 1 },
    { x: 5, y: 1 }
  ],
  0,
  0
);

tetromino_S.rotate = function() {
  this.coordinates[3].x += this.orientation === 0 ? 1 : -1;
  this.coordinates[2].x += this.orientation === 0 ? 1 : -1;
  this.coordinates[2].y += this.orientation === 0 ? -2 : 2;
  this.orientation = this.orientation === 0 ? 1 : 0;

  return this;
};

export const tetromino_Z = new Tetromino(
  'Z',
  [
    { x: 4, y: 0 },
    { x: 5, y: 0 },
    { x: 5, y: 1 },
    { x: 6, y: 1 }
  ],
  1,
  0
);

tetromino_Z.rotate = function() {
  this.coordinates[3].y += this.orientation === 0 ? -1 : 1;
  this.coordinates[0].x += this.orientation === 0 ? 2 : -2;
  this.coordinates[0].y += this.orientation === 0 ? -1 : 1;
  this.orientation = this.orientation === 0 ? 1 : 0;

  return this;
};

export const tetromino_J = new Tetromino(
  'J',
  [
    { x: 4, y: 0 },
    { x: 6, y: 0 },
    { x: 6, y: 1 },
    { x: 5, y: 0 }
  ],
  1,
  0
);

tetromino_J.rotate = function() {
  const distances = [
    [{ x: 1, y: 1 }, { x: -1, y: -1 }, { x: 0, y: -2 }],
    [{ x: 1, y: -1 }, { x: -1, y: 1 }, { x: -2, y: 0 }],
    [{ x: -1, y: -1 }, { x: 1, y: 1 }, { x: 0, y: 2 }],
    [{ x: -1, y: 1 }, { x: 1, y: -1 }, { x: 2, y: 0 }]
  ];

  this.coordinates = this.coordinates.map((coord, i) => {
    if (i !== 3) {
      coord.x += distances[this.orientation][i].x;
      coord.y += distances[this.orientation][i].y;
    }

    return coord;
  });

  this.orientation =
    this.orientation === 3 ? 0 : this.orientation + 1;

  console.log(this.coordinates);

  return this;
};

export const tetromino_L = new Tetromino(
  'L',
  [
    { x: 6, y: 0 },
    { x: 4, y: 0 },
    { x: 4, y: 1 },
    { x: 5, y: 0 }
  ],
  1,
  0
);

tetromino_L.rotate = function() {
  const distances = [
    [{ x: -1, y: -1 }, { x: 1, y: 1 }, { x: 2, y: 0 }],
    [{ x: -1, y: 1 }, { x: 1, y: -1 }, { x: 2, y: 0 }],
    [{ x: 1, y: 1 }, { x: -1, y: -1 }, { x: 0, y: -2 }],
    [{ x: 1, y: -1 }, { x: -1, y: 1 }, { x: -2, y: 0 }]
  ];

  this.coordinates = this.coordinates.map((coord, i) => {
    if (i !== 3) {
      coord.x += distances[this.orientation][i].x;
      coord.y += distances[this.orientation][i].y;
    }

    return coord;
  });

  this.orientation =
    this.orientation === 4 ? 0 : this.orientation++;

  return this;
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
