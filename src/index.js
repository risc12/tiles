// @flow
import type { Grid } from './lib/types';
import { GridRenderer, GridListener } from './lib';

function main(): void {
  console.warn('Here we go!');

  const grid: Grid = {
    width: 3,
    height: 5,
    tileSize: 30,
    content: [ [ { value: true} ] ]
  }

  const canvas = document.querySelector('canvas');
  const gridRenderer = new GridRenderer(canvas);
  const gridListener = new GridListener(canvas, grid);
  
  gridListener.onClick(([x: number, y: number]) => {
    console.log(x, y);
    if(!grid.content[x]) {
      grid.content[x] = [];
    }

    if(!grid.content[x][y]) {
      grid.content[x][y] = { value: false }
    }

    grid.content[x][y].value = !grid.content[x][y].value;

    gridRenderer.render(grid);
  });
  

  gridRenderer.render(grid);
}

window.onload = main;