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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>

        <label
          htmlFor="Email"
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="text"
          {...register("Email")}
          className="w-full px-3 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label
          htmlFor="Password"
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          type="password"
          {...register("Password")}
          className="w-full px-3 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label
          htmlFor="category"
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          Category
        </label>
        <select
          id="category"
          {...register("category")}
          className="w-full px-3 py-2 mb-6 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="sports">Sports</option>
          <option value="arts">Arts</option>
          <option value="history">History</option>
          <option value="physics">Physics</option>
        </select>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Submit
        </button>
      </form>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Signin;
