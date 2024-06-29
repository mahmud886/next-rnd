import React from 'react';
import {getJokes} from "@/lib/api-calls";
import RandomJoke from "@/components/RandomJoke";

// export const revalidate = 10;

const Jokes = async () => {
  const jokes = await getJokes()
  return (
    <>
      <div className='container flex flex-col justify-center items-center min-h-screen'>
        <h2 className='text-2xl text-red-600'>{jokes.value}</h2>
        <RandomJoke/>
      </div>

    </>
  );
};

export default Jokes;