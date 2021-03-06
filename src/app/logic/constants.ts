const vectors: { [key: string]: number[] } = {
  topLeft: [-1, -1],
  top: [-1, 0],
  topRight: [-1, 1],
  right: [0, 1],
  bottomRight: [1, 1],
  bottom: [1, 0],
  bottomLeft: [1, -1],
  left: [0, -1],
};
const avoid = [
  [0, 1],
  [0, 6],
  [1, 0],
  [1, 1],
  [1, 2],
  [1, 3],
  [1, 4],
  [1, 5],
  [1, 6],
  [1, 7],
  [2, 1],
  [2, 6],
  [3, 1],
  [3, 6],
  [4, 1],
  [4, 6],
  [5, 1],
  [5, 6],
  [6, 0],
  [6, 1],
  [6, 2],
  [6, 3],
  [6, 4],
  [6, 5],
  [6, 6],
  [6, 7],
  [7, 1],
  [7, 6],
];
const target = [
  [0, 0],
  [0, 7],
  [7, 0],
  [7, 7],
];
const colors = [0, "White", "Black"];
const AI_DELAY = 0;
const ANIMATION_TIME = 250;
export { vectors, avoid, target, colors, AI_DELAY, ANIMATION_TIME };
