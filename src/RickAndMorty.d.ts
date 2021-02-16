interface RickAndMortyInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}
interface RickAndMortyObjectDescription {
  name: string;
  url: string;
}
interface RickAndMortyCharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: RickAndMortyObjectDescription;
  location: RickAndMortyObjectDescription;
  image: string;
  episode: string[];
  url: string;
  created: Date;
}

interface RickAndMortyAPIResponse<T> {
  info: RickAndMortyInfo;
  results: Array<T>;
}

type RickAndMortyCharactersResponse = RickAndMortyAPIResponse<RickAndMortyCharacter>;
