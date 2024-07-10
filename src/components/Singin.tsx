import React from "react";
import { useForm } from "react-hook-form";
import useUserlogin from "../hooks/useUserloginandlogout";
import toast, { Toaster } from "react-hot-toast";

type SinginTypes = {
  Email: string;
  Password: string;
};

const Singin: React.FC = () => {
  const { handleSubmit, register } = useForm<SinginTypes>();
  const [login] = useUserlogin();

  const onshubmit = (data: SinginTypes) => {
    if (data.Email === "" && data.Password === "") {
      let obj = {
        ...data,
        Email: "testuser@gmail.com ",
        Password: "testuser@2021",
      };
      login();
      toast.success("sucessfully login");
    } else {
      if (!data.Email.includes("@.") || data.Password.length < 8) {
        toast.error(
          "Please give the original email or please give the password which is greater than 8"
        );
      } else {
        console.log(data);
        toast.success("sucessfully login");
        login();
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onshubmit)}>
        <label htmlFor="Email">Email</label>
        <input type="text" {...register("Email")} />

        <label htmlFor="Password">Password</label>
        <input type="password" {...register("Password")} />

        <button type="submit">Submit</button>
      </form>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Singin;
