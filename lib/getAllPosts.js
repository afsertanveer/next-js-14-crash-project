export default async function getAllPosts(){
    const result =await fetch("https://jsonplaceholder.typicode.com/posts?limit=10");
    if(!result.ok){
        throw new Error("There was an error fetching the data");
    }
    return result.json();
}