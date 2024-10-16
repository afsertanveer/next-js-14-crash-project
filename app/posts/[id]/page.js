import React, { Suspense } from 'react'
import getPost from '@/lib/getPost';
import getPostComment from '@/lib/getPostComment';
import Comments from '@/app/components/Comments';
// import getAllPosts from '@/lib/getAllPosts';

export async function generateMetadata({ params }) {

    const { id } = params;
    const postPromise = getPost(id);
    const post = await postPromise;

    return {
        title: post.title,
        description: post.body
    }
}

export default async function PostPage({ params }) {
    const { id } = params;
    const postPromise = getPost(id);
    const commentPromise = getPostComment(id);


    // const [post, comments] = await Promise.all([postPromise, commentPromise])
    const post = await postPromise;
    
    return (
        <main className='flex flex-col justify-center items-center'>
            <h1 className='text-xl font-bold text-green-5000'>{post.title}</h1>
            <p className='text-sm text-pink-600'>{post.body}</p>
            <hr />
            <Suspense fallback="<h1>Loading Comments...</h1>">
                <Comments  promise={commentPromise}/>
            </Suspense>
        </main>
    )
}
