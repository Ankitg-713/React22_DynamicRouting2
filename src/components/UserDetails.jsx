import React from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function UserDetails() {

    const { name } = useParams();
    const navigate = useNavigate();

    const goBackHandler = () => {
        navigate(-1)
        //navigare("/user")
        //or you can write this also
    }

  return (
    <div className='w-full h-full flex flex-col items-center'>
        <h1 className='text-6xl text-center text-blue-300 p-4'>User Details</h1>
        <h1 className='text-center text-3xl font-semibold'>Hii {name}</h1>
        <button onClick={goBackHandler} className='px-3 py-1 bg-red-400 rounded-md mt-4 text-sm text-white'>Go Back</button>
    </div>
  )
}

export default UserDetails