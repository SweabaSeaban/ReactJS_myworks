import { useMutation,useQueryClient } from '@tanstack/react-query'
import React, { useRef } from 'react'
import { createPost } from './posts'
import { Post } from './Post'

const CreatePost = ({setCurrentPage}) => {
    const titleRef = useRef()
    const bodyRef = useRef()
    const queryClient = useQueryClient()
    const createPostMutation=useMutation({
        mutationFn: createPost,
        onSuccess:data=>{
            queryClient.setQueryData(["posts", data.id], data)
            queryClient.invalidateQueries(["posts"], { exact: true })
            setCurrentPage(<Post id={data.id}/>)
        }
    })
    function handleSubmit(e){
        e.preventDefault()
        createPostMutation.mutate({
            title:titleRef.current.value,
            body: bodyRef.current.value,
        })
    }
    return (
        <div>
            {createPostMutation.isError && JSON.stringify(createPostMutation.error)}
            <h1>Create Post</h1>
            
            <form onSubmit={handleSubmit}>
                Title:<input type="text" id="title" ref={titleRef}/> <br /> <br />
                Body:<input type="text" id="body" ref={bodyRef}/> <br /> <br />
                <button>
                    {createPostMutation.isLoading?'Loading':'Create'}
                </button>
            </form>
        </div>
    )
}

export default CreatePost