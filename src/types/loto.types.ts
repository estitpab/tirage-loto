export type LotoDatas = Array<LotoData>;

export type LotoData = {
  fields: LotoDraw;
  recordid: CurrentDraw;
};

export type LotoDraw = {
  boule_1: BallNumber;
  boule_2: BallNumber;
  boule_3: BallNumber;
  boule_4: BallNumber;
  boule_5: BallNumber;
  numero_chance: BallNumber;
  date_de_tirage: string;
};

export type BallNumber = number;
export type CurrentDraw = string;
