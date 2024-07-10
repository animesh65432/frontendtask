import React from "react";
import { useForm } from "react-hook-form";
import useUserlogin from "../hooks/useUserloginandlogout";
import toast, { Toaster } from "react-hot-toast";

export type SigninTypes = {
  Email: string;
  Password: string;
  category: string;
};

const Signin: React.FC = () => {
  const { handleSubmit, register } = useForm<SigninTypes>();
  const [login] = useUserlogin();

  const onSubmit = (data: SigninTypes) => {
    if (data.Email === "" && data.Password === "") {
      let obj = {
        ...data,
        Email: "testuser@gmail.com",
        Password: "testuser@2021",
      };
      console.log(data);
      login(obj);
      toast.success("Successfully logged in");
    } else {
      if (!data.Email.includes("@") || data.Password.length < 8) {
        toast.error(
          "Please provide a valid email or ensure the password is at least 8 characters long"
        );
      } else {
        console.log(data);
        toast.success("Successfully logged in");
        login(data);
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="Email">Email</label>
        <input type="text" {...register("Email")} />

        <label htmlFor="Password">Password</label>
        <input type="password" {...register("Password")} />

        <label htmlFor="category">Category</label>
        <select id="category" {...register("category")}>
          <option value="sports">Sports</option>
          <option value="arts">Arts</option>
          <option value="history">History</option>
          <option value="physics">Physics</option>
        </select>

        <button type="submit">Submit</button>
      </form>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Signin;
