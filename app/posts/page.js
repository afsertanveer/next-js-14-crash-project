import getAllPosts from '@/lib/getAllPosts'
import Link from 'next/link';
import React from 'react'

export default async function AllPosts() {
    const posts = await getAllPosts();
    return (
        <main className='mt-10'>
            <h1 className='text-center text-3xl font-bold' >All Posts </h1>
            <div className='grid gird-cols-1'>
                {
                    posts.map(post => (
                        <div key={post.id} className='my-4 flex justify-center items-center'>
                            <Link href={`posts/${post.id}`} className='text-red-700 underline'>{post.title}</Link>
                        </div>
                    ))
                }
            </div>
        </main>
    )
}
