export type BreedType = {
  id: string;
  bred_for: string;
  weight: {
    imperial: string;
    metric: string;
  };
  name: string;
  temperament: string;
  origin: string;
  life_span: string;
  alt_names: string;
};

export type CatType = {
  id: string;
  url: string;
  favouriteId: number;
  breeds: BreedType[];
};
