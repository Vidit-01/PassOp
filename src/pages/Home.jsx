import React from 'react'
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom'
import Table from '../Components/Table'
const Home = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();
            console.log(result);

        } catch (err) {
            console.error("Login error:", err);
        }
    }
    return (
        <>
            <div className="logo w-full flex justify-center">
                <span className=" heading text-4xl font-sans font-bold text-shadow-green-200 text-shadow-md">
                    PythWord
                </span>
        </div>
            <div className="flex justify-center my-10">
                <div className="mt-2 flex">

                    <form className="flex flex-col items-center justify-center " onSubmit={handleSubmit(onSubmit)}>
                        <div className="box2 flex w-full justify-center">
                            <input  {...register("Website")} id="website" className="block  py-1.5 pr-3  text-base text-gray-900 placeholder:text-gray-400  sm:text-sm/6  rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus:outline-green-600 my-3 mx-1 w-full mx-3" placeholder="Website" />
                        </div>
                        <div className="box1 flex">
                        <input type="text" {...register("username")} id="username" className="block min-w-0 grow py-1.5 pr-3  text-base text-gray-900 placeholder:text-gray-400  sm:text-sm/6  rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus:outline-green-600 my-1 mx-3" placeholder="username" />

                        <input type="password" {...register("password")} id="password" className="block min-w-0 grow py-1.5 pr-3  text-base text-gray-900 placeholder:text-gray-400  sm:text-sm/6  rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus:outline-green-600 my-1 mx-3" placeholder="Password" />
                        </div>
                        <input type="submit" className="rounded-full bg-green-400 px-6 py-2 mx-5 my-2 text-white font-semibold" />


                    </form>

                </div>
            </div>
        <Table/>
        </>
    )
}

export default Home
