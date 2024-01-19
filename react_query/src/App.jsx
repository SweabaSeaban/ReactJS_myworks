import './App.css'
import { useState } from 'react'
import PostsList1 from './PostsList1'
import PostsList2 from './PostsList2'
import { Post } from './Post'
import CreatePost from './CreatePost'
import { useQueryClient } from '@tanstack/react-query'
import { getPost } from './posts'

function App(){
  const [currentPage,setCurrentPage]=useState(<PostsList1/>)
  const queryClient=useQueryClient()
  function onHoverPost() {
    queryClient.prefetchQuery({queryKey:["posts",1],queryFn:()=>getPost(1)})
  }
  return(
    <div>
      <button onClick={()=>setCurrentPage(<PostsList1/>)}>
        Posts List 1
      </button>
      <button onClick={()=>setCurrentPage(<PostsList2/>)}>
        Posts List 2
      </button>
      <button onMouseEnter={onHoverPost} onClick={()=>setCurrentPage(<Post id={1}/>)}>
        First Post
      </button>
      <button onClick={()=>setCurrentPage(<CreatePost setCurrentPage={setCurrentPage}/>)}>
        New post
      </button>
      {currentPage}
    </div>
  )
}

export default App

// React query example

// const POSTS=[
//   {id:1,title:"Post 1"},
//   {id:2,title:"Post 2"},
// ]

// function App() {

//   const queryClient=useQueryClient()

//   const postsQuery=useQuery({
//     queryKey:["posts"],
//     queryFn:()=>wait(1000).then(()=>[...POSTS]),
//     // wait(1000).then(()=>[...POSTS])
//   })
//   if(postsQuery.isLoading) return <h1>Loading...</h1>
//   if(postsQuery.isError) {
//     return <h1>{JSON.stringify(postsQuery.error)}</h1>
//   }
//   const newPostMutation = useMutation({
//     mutationFn:title=>{
//       return wait(1000).then(()=>
//       POSTS.push({ id: crypto.randomUUID(), title })
//       )
//     },
//     onSuccess:()=>{
//       queryClient.invalidateQueries(["posts"])
//     }
//   })
  
//   return(
//   <>
//     <h1>TanStack query</h1>
//     <div>
//       {postsQuery.data.map(post=>(
//         <div key={post.id}>
//           {post.title}
//         </div>
//       ))}
//     </div>
//     <button onClick={()=>newPostMutation.mutate("new post")}>
//       Add new post
//     </button>
//   </>
//   )
// }

// function wait(duration){
//   return new Promise(resolve=>setTimeout(resolve,duration))
// } 


/*Promise example*/
// let userLeft=false;
// let userWatching=true;
// function myPromise(){
//   return new Promise((resolve,reject)=>{
//     if(userLeft){
//       reject({
//         name:'User Left',
//         message:':('
//       })
//     }else if(userWatching){
//       reject({
//         name:'user watch',
//         message:':)'
//       })
//     }else{
//       resolve({
//         name:'promise',
//         message:'success'
//       })
//     }
//   })
// }

// {
//   myPromise().then((message)=>{
//     console.log(message)
//   }).catch((error)=>{
//     console.log(error.name+' '+error.message)
//   })
// }