import React from 'react'

export default async function Comments({promise}) {
    const comments = await promise;
    return (
        <div className='mt-4 px-3 flex flex-col'>
            <h1>Comments</h1>
            <ul>
                {
                    comments.map(comment => (
                        <li key={comment.id} className='my-3 '>{comment.body}</li>
                    ))
                }
            </ul>
        </div>
    )
}
