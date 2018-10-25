export type AmountOfTiles = number;
export type Pixels = number;

export type Tile = {
  value: Boolean
};

export type Grid = {
  width: AmountOfTiles;
  height: AmountOfTiles;

  tileSize: Pixels;

  content: Array<Array<Tile>>;
};
