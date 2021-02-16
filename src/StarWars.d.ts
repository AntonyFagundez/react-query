interface StarWarsCharacter {
    birth_year: string,
    eye_color:string,
    films: string[],
    gender: string,
    hair_color: string,
    height: string,
    homeworld: string,
    mass: string,
    name: string,
    skin_color: string,
    created: Date,
    edited: Date,
    species: string[],
    starships: string[],
    url: string,
    vehicles: string[]
}

interface StarWarsAPIResponse<T> {
    count: number,
    next: null | string
    previous: null | string,
    results: Array<T>
}

type StarWarsCharactersResponse = StarWarsAPIResponse<StarWarsCharacter>;
