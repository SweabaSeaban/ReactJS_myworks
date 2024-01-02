const BlogList = ({blogs,title,handleDelete}) => {

    // const blogs=props.blogs;..............can be given like this const BlogList = (props) or replace the props
    // const title=props.title;
    return ( 
        <div className="blog-list">
            <h1>{title}</h1>
            {/* looping through blogs */}
            {blogs.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <h1>{blog.title}</h1>
                        <p>{blog.body}</p>
                        <button onClick={()=>handleDelete(blog.id)}>Delete blog</button>
                    </div>
            ))
            }
        </div>
     );
}
 
export default BlogList;