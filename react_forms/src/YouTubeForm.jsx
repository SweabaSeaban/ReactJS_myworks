import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
let renderCount = 0;
// Formvalues={
//   username:string,
//   email:email,
//   age:number
// }
export const YouTubeForm = () => {
  const form = useForm({
    defaultValues: {
      username: "",
      email: "",
      age:0
    },
  });
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    watch
  } = form;
  renderCount++;
  register("username")
  register("email")
  // console.log(watch())
  // console.log(watch('email'))
  // console.log(watch(['email','username']))
  return (
    <div>
      <h1>Form</h1>

      <form
        onSubmit={handleSubmit((data) => {
          // console.log(data);
          
        })}
      >
        <input
          type="text"
          id="username"
          {...register("username", 
          {
            required: "This is required",
            minLength: {
              value: 4,
              message: "Minlength required",
            },
          }
          )}
        />
        <p>{errors.username?.message}</p>
        <br />
        <br />
        <input
          type="email"
          id="email"
          {...register("email",
          { required: "This is required" }
          )}
        />
        <p>{errors.email?.message}</p>
        <br />
        <br />
        <input type="number" id="age" {...register("age",{valueAsNumber:true})}/>
        <button>Submit{renderCount / 2}</button>
      </form>
      <DevTool control={control} />
    </div>
  );
};
