// @flow
import type { Grid } from './types';
type Point = [number, number];

const colors = {
  active: "#ff2626",
  inactive: "#2626ff",
}

class GridRenderer {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
  }

  render(grid: Grid) {
    const ctx = this.ctx;

    ctx.canvas.width  = grid.width * grid.tileSize;
    ctx.canvas.height = grid.height * grid.tileSize;

    for (var y=0; y <= grid.height - 1; y++) {
      for (var x=0; x <= grid.width - 1; x++) {
        console.log(x, y);

        const location: Point = [
          x * grid.tileSize,
          y * grid.tileSize,
        ];

        if(grid.content[x] && grid.content[x][y] && grid.content[x][y].value) {
          ctx.fillStyle = colors.active;
        } else {
          ctx.fillStyle = colors.inactive;
        }

        ctx.fillRect(
          ...location,
          grid.tileSize - 1,
          grid.tileSize - 1,
        );
      }
    }
  }
}

export default GridRenderer;


