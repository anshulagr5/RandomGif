// import React, { useState } from 'react'
// import axios from 'axios';
// import { useEffect } from 'react';
import React from 'react';
import ShareButton from './ShareButton';

import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const Random = () => {


  const {gif, loading, fetchData} = useGif();

  const shareGif = async () => {
  try {
    const response = await fetch(gif);
    const blob = await response.blob();
    const objectURL = URL.createObjectURL(blob);

    await navigator.share({
      title: 'Shared Random GIF',
      text: 'Check out this awesome random GIF!',
      files: [new File([blob], 'random.gif', { type: blob.type })],
    });

    // Clean up the object URL to release resources
    URL.revokeObjectURL(objectURL);

    console.log('Shared successfully');
  } catch (error) {
    console.error('Error sharing:', error);
  }
};

  return (
    <div className='lg:w-1/2 w-full bg-green-500 rounded-xl border border-black
    flex flex-col items-center gap-y-5 mt-[15px]'>

      <h1 className='mt-[15px] text-xl md:text-2xl underline uppercase font-bold'> A Random Gif</h1>

      {!loading ? (
        <div>
          <img src={gif} width="450" alt='gif' />
          <ShareButton shareFunction={shareGif} /> {/* Pass the shareGif function as a prop */}
        </div>
      ) : (
        <Spinner />
      )}

      

      <button onClick={() => fetchData()}
      className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px] uppercase  font-medium tracking-wide">

       Generate

      </button>

    </div>
  )
}

export default Random
