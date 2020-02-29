export const SPAWN_TETROMINO_T = 'SPAWN_TETROMINO_T';
export const DROP_ACTIVE_TETROMINO =
  'DROP_ACTIVE_TETROMINO';

export const spawnTetromino_T = () => dispatch => {
  dispatch({
    type: SPAWN_TETROMINO_T,
    initialCoords: [
      { x: 4, y: 0 },
      { x: 5, y: 0 },
      { x: 6, y: 0 },
      { x: 5, y: 1 }
    ]
  });
};

export const dropActiveTetromino = activeTetroCoords => dispatch => {
  dispatch({
    type: DROP_ACTIVE_TETROMINO,
    droppedActiveCoords: activeTetroCoords.map(coords => {
      coords.y += 1;
      return coords;
    })
  });
};
