import { useQuery } from '@tanstack/react-query'
import {getPost} from './posts'

export const Post = ({id}) => {
    const postQuery=useQuery({
        queryKey:["posts",id],
        queryFn:()=>getPost(id),
        placeholderData: [{ id: 1, title: "Initial Data" }],
    })

    if(postQuery.status === "loading") return <h1>Loading...</h1>
    if(postQuery.status === "error") {
        return <h1>{JSON.stringify(postQuery.error)}</h1>
    }
    return (
        <div>
           
           <h1>{postQuery.data.title}</h1>
        </div>
    )
}
