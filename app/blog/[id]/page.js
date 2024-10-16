import { notFound } from 'next/navigation';
import React from 'react'

export default function SingleBlog({params}) {
    const {id} = params;
    if( id === '3'){
        notFound();
    }
  return (
    <div className='mt-6'>The blog id is {id}</div>
  )
}
