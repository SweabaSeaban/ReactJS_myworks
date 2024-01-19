import { useForm } from "react-hook-form";
import { z } from "zod";
import {zodResolver} from "@hookform/resolvers/zod"

const schema=z.object({
  email:z.string().email(),
  password:z.string().min(8),
})

function App() {

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm({
    defaultValues: {
      email: "eg@gmail.com",
    },
    resolver:zodResolver(schema)
  });

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      throw new Error();
      console.log(data);
    } catch (error) {
      setError("email", {
        message: "This email is already taken",
      });
    }
  };

  return (
    <>
      <h3>Form</h3>
      <form className="tutorial gap-2" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("email")}
          type="text"
          placeholder="Email"
        />
        {errors.email && (
          <div className="text-red-600">{errors.email.message}</div>
        )}
        <br />
        <br />
        <input
          {...register("password")}
          type="password"
          placeholder="Password"
        />
        {errors.password && (
          <div className="text-red-600">{errors.password.message}</div>
        )}
        <br />
        <br />
        <button disabled={isSubmitting} type="submit">
          {isSubmitting ? "Loading" : "Submit"}
        </button>
      </form>
      {/* <YouTubeForm/> */}
    </>
  );
}

export default App;
