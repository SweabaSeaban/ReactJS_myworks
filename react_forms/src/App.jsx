// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import {zodResolver} from "@hookform/resolvers/zod"

// const schema=z.object({
//   email:z.string().email(),
//   password:z.string().min(8),
// })

// function App() {

//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//     setError,
//   } = useForm({
//     defaultValues: {
//       email: "eg@gmail.com",
//     },
//     resolver:zodResolver(schema)
//   });

//   const onSubmit = async (data) => {
//     try {
//       await new Promise((resolve) => setTimeout(resolve, 1000));
//       throw new Error();
//       console.log(data);
//     } catch (error) {
//       setError("email", {
//         message: "This email is already taken",
//       });
//     }
//   };

//   return (
//     <>
//       <h3>Form</h3>
//       <form className="tutorial gap-2" onSubmit={handleSubmit(onSubmit)}>
//         <input
//           {...register("email")}
//           type="text"
//           placeholder="Email"
//         />
//         {errors.email && (
//           <div className="text-red-600">{errors.email.message}</div>
//         )}
//         <br />
//         <br />
//         <input
//           {...register("password")}
//           type="password"
//           placeholder="Password"
//         />
//         {errors.password && (
//           <div className="text-red-600">{errors.password.message}</div>
//         )}
//         <br />
//         <br />
//         <button disabled={isSubmitting} type="submit">
//           {isSubmitting ? "Loading" : "Submit"}
//         </button>
//       </form>
//       {/* <YouTubeForm/> */}
//     </>
//   );
// }

import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";

const App = () => {
const { register,handleSubmit,formState:{errors}}=useForm();
const[userInfo,setUserInfo]=useState();
const [submitSuccess,setSubmitSuccess]=useState(false)
const onSubmit=(data)=>{
  setUserInfo(data)
  console.log(data)

  setSubmitSuccess(true)
 
}

  return (
    <div>
      <pre>{JSON.stringify(userInfo,undefined,2)} 
      
      
      </pre>
      {submitSuccess && <div className='bg-green-100 text-green-500 p-5 rounded-lg outline-green-500 outline m-5'>Submitted successfully</div>}
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-3'>
        <div>
          <input type="text" placeholder='Username' {...register("username",{
            required:"Username is required"
          })} />
        </div>
        <p className='text-red-600'>{errors.username?.message}</p>
        <div>
          <input type="email" placeholder='Email' {...register("email",{
            required:"Email is required",
            pattern:{
              value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message:'Please enter a valid email address (Ex: johndoe@domain.com).'
            }
          })} />
        </div>
        <p className='text-red-600'>{errors.email?.message}</p>
        <div>
          <input type="password" placeholder='Password' {...register("password",{
            required:"Password is required",
            minLength:{value:4,message:'More than 4 char'},
            maxLength:{value:10,message:'No more than 10 char'}
          })} />
        </div>
        <p className='text-red-600'>{errors.password?.message}</p>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App

