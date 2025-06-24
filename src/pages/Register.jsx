import React from 'react'
import { useForm } from "react-hook-form"
const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  
  console.log(watch("example"))
  return (
    <div className="w-full ">
      <div className="text-green-500 flex justify-center heading text-2xl font-sans font-bold md:text-4xl text-center">
        Protect Your Passwords
      </div>
      <div className=" flex justify-center heading text-4xl font-sans font-bold">
        Register
      </div>
      <div className="flex justify-center my-20">
        <div className="mt-2 flex">
          <form className="flex flex-col items-center justify-center " onSubmit={handleSubmit(onSubmit)}>

            <input type="text" {...register("email")} id="username" className="block min-w-0 grow py-1.5 pr-3  text-base text-gray-900 placeholder:text-gray-400  sm:text-sm/6  rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus:outline-green-600 my-3" placeholder="Email" />

            <input type="password" {...register("password")} id="password" className="block min-w-0 grow py-1.5 pr-3  text-base text-gray-900 placeholder:text-gray-400  sm:text-sm/6  rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus:outline-green-600" placeholder="Password" />

            <input type="submit" className="rounded-full bg-green-400 px-6 py-2 m-5 text-white font-semibold" />
      

          </form>

        </div>
      </div>
    </div>
  )
}

export default Register
