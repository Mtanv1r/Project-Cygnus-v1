//fake post collector 
//evrery post will be an object 
//array of 5 fake post object
//filtering news  
let postArr=[
    {
        text:'fifa world cup final ',
        date:'13/8/2026',
        url:'postLink',
    },
    {
        text:'Ncp vice pesident el',
        date:'15/8/2026',
        url:'postLink',
    },
    {
        text:'president speech about current destruction ',
        date:'13/8/2026',
        url:'postLink',
    },
     {
        text:'jamal patwary speech  ',
        date:'18/8/2026',
        url:'postLink',
    },
         {
        text:'Bnp rajniti',
        date:'14/8/2026',
        url:'postLink',
    }
];
//filtering by date
// const getPostByDate=(posts,date)=>{
//     // filtering 
//     newarr=posts.filter((elm)=>{
//         if(elm.date===date){
//             return elm;
//         }
//     });
//     return newarr;
// }
//filtering by keyword
// let getPostbyKeyword=(posts,keyword)=>{
//     keyArr=posts.filter((elm)=>{
//         if(elm.text.includes(keyword)){
//             return elm;
//         }
//     });
//     return keyArr;
// }
// console.log(getPostbyKeyword(postArr,'jamal'));
let getPost=(posts , date , keyword)=>{
    let newArr=posts.filter((elm)=>{
        if(elm.date===date && elm.text.includes(keyword)){
            return elm;
        }
    })
    return newArr;
}
// console.log(getPost(postArr,'18/8/2026','jamal'));
//adding new post 
function addPost(posts,newPost){
    let updatePost= posts.push(newPost);
    return posts;
}
console.log(addPost(postArr,  {
        text:'Attack on Titan season5',
        date:'19/8/2026',
        url:'postLink',
    }));

//removing post 
function removePost(posts,keyword){
    // let updatePost=posts.filter((elm)=>{
    //     if(elm.text.includes(keyword)){

    //     }
    // })
    let updatePost=posts.filter((elm)=> elm.text !== keyword);
    return updatePost;
}
console.log(removePost(postArr,"jamal"));