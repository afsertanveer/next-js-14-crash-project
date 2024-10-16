export default async function getPostComment(id){
    const result = (await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`));

    if(!result.ok){
        throw new Error("Cannot fetch comment");
    }
    return result.json() ;
}