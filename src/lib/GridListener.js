// @flow

import type { Grid, AmountOfTiles, Pixels } from './types';

type Point = [Pixels, Pixels];
type GridLocation = [AmountOfTiles, AmountOfTiles];
type Callback = (GridLocation) => any;

class GridListener {
  canvas: HTMLCanvasElement;
  grid: Grid;

  constructor(canvas: HTMLCanvasElement, grid: Grid) {
    this.canvas = canvas;
    this.grid = grid;
  }

  onClick(callback: Callback) {
    this.canvas.addEventListener('click', (event: MouseEvent) => {
      const offsetX: Pixels = this.canvas.offsetLeft;
      const offsetY: Pixels = this.canvas.offsetTop;

      const point: Point = [
        event.clientX - offsetX,
        event.clientY - offsetY,
      ];

      const location: GridLocation = [
        Math.floor(point[0] / this.grid.tileSize),
        Math.floor(point[1] / this.grid.tileSize),
      ];

      callback(location);
    });
  }
}

export default GridListener;