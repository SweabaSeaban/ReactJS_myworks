import { useState,useEffect } from "react";
import BlogList from "./BlogList";
function Home(){
    // const [name,setName]=useState('mario');
    // const [age,setAge]=useState(25);
    // function handleClick(){
    //     setName('luigi');
    //     setAge(30);
    // }
    // function handleClickAgain(name){
    //     console.log('hello '+ name);
    // }

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
      ])
    const handleDelete = (id) =>{
        const newBlogs=blogs.filter((blog)=>blog.id!==id);
        setBlogs(newBlogs);
    }
    const [name,setName]=useState('mario');
    useEffect(()=>{
        console.log("useEffect ran");
        console.log(name);
    },[name]);
    return(
        <div className="home">
            {/* component prop_name={value} */}
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
            <button onClick={()=>{setName('luigi')}}>Click name</button>
            <p>{name}</p>
            

            {/* displaying component with mario as author 
            <BlogList blogs={blogs.filter((blog)=>blog.author === 'mario')} title="Mario's blog"/>*/}

            {/* <h1>Home Page</h1>
            <p>{name} is {age} years old </p>
            <button onClick={handleClick}>Click here</button>
            passing arguments in a function
            <button onClick={() => handleClickAgain('s')}>Click again</button> */}


        </div>
    )
}
export default Home