import Link from 'next/link'
import React from 'react'

export default function Blogs() {
    // throw new Error("A manual made error");
    const blogs = [{
        id:1,
        title: "Blog 1",
        description: "Blog  1 desription",
    },
    {
        id:2,
        title: "Blog 2",
        description: "Blog  2 desription",
    }
    ]
    return (
        <main className='mt-10'>
            <div>Blogs</div>
            <ul className=' mt-20 flex flex-col gap-20'>
                {
                    blogs.map(blog=>(
                        <li key={blog.id}><Link href={"/blog/"+blog.id}>{blog.title}</Link></li>
                    ))
                }
            </ul>
        </main>
    )
}
