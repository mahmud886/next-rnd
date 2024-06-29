import React from 'react';
import {getJokes} from "@/lib/api-calls";

const RandomJoke = async () => {
  const jokes = await getJokes()
  return (
    <div>
      <h2 className='text-2xl text-green-600'>{jokes.value}</h2>
    </div>
  );
};

export default RandomJoke;