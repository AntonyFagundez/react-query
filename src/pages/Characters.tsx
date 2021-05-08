import { FC } from 'react';
import {  useQuery } from 'react-query';
import axios from 'axios';


const Characters: FC<{}> = () => {

    const characters = useQuery<StarWarsCharacter[], Error>('characters', async () => {
        const { data: { results } } = await axios.get<StarWarsCharactersResponse>('https://swapi.dev/api/people/');
        return results;
    });

    return (
        <div className={'flex flex-col space-y-7 items-center container '}>
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
                        <div key={`Character-container-${i}`} className={'p-6 max-w-sm  mt-2  bg-white rounded-xl shadow-md flex  items-center space-x-2'}>
                            <div className={'text-gray-600'} >Name: </div> {name}
                            <br key={`br-character-first-${i}`} />
                            {gender !== 'n/a' && (
                                <div key={`Gender-container-${1}`}>
                                    <div className={'text-gray-600'} >Gender: </div> {gender}
                                    <br key={`br-gender-${i}`} />
                                </div>
                            )}
                            <br key={`br-character-second-${i}`} />
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Characters;