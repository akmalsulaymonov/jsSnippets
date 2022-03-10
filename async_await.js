
// async await

const urls = [
	'https://jsonplaceholder.typicode.com/posts',
	'https://jsonplaceholder.typicode.com/comments',
	'https://jsonplaceholder.typicode.com/albums',
	'https://jsonplaceholder.typicode.com/users'
];

const getData = async function(){
    try{
        const [ posts, comments, albums, users ] = await Promise.all(urls.map(async function(url){
            const res = await fetch(url);
            return res.json();
        }));

        console.log('posts', posts);
        console.log('comments', comments);
        console.log('albums', albums);
        console.log('users', users);
    }
    catch (err){
        console.log('Oops', err);
    }
}

const getData2 = async function(){
    const arrayOfPromises = urls.map(url => fetch(url));
    for await (let req of arrayOfPromises){
        const data = await req.json();
        console.log(data);
    }
}