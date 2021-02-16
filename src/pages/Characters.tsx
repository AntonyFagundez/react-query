import { FC } from 'react';
import {  useQuery } from 'react-query';
import axios from 'axios';


const Characters: FC<{}> = () => {

    const characters = useQuery<StarWarsCharacter[], Error>('characters', async () => {
        const { data: { results } } = await axios.get<StarWarsCharactersResponse>('https://swapi.dev/api/people/');
        return results;
    });

    return (
        <>
            {
                characters.isFetching ? 'Loading...' : null
            }
            {
                !characters.isFetching && characters.error && 
                (
                    <>
                    {'Algo ocurrió mal'}
                    {characters.error.message}
                    </>
                )
            }
            {
                !characters.isFetching && characters.data &&
                characters.data?.map(({ name, gender }, i) => {
                    return (
                        <div key={`Character-container-${i}`} className={'p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4'}>
                            Name {name}
                            <br key={`br-character-first-${i}`} />
                            {gender !== 'n/a' && (
                                <div key={`Gender-container-${1}`}>
                                    {`Gender: ${gender}`}
                                    <br key={`br-gender-${i}`} />
                                </div>
                            )}
                            <br key={`br-character-second-${i}`} />
                        </div>
                    );
                })
            }
        </>
    );
};

export default Characters;