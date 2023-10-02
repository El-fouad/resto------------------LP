import React from 'react'
import { useQuery, useQueryClient } from 'react-query';

function About() {
   
  return (
    <div className=' flex items-center justify-center h-screen '>
      <div className='group grid place-items-center w-40 h-40 bg-purple'>
        <div className=' w-10 h-10 bg-blue group-hover:bg-pink'></div>
        <div className=' w-10 h-10 bg-pink group-hover:bg-blue'></div>
      </div>
    </div>
  )
}

export default About