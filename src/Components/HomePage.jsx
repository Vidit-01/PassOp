import React from 'react'
import { useNavigate } from 'react-router-dom'
const HomePage = () => {
  const navigate = useNavigate()
  return (
    <>
    <div className='w-fill flex flex-col items-center justify-center'>
      <div className="heading text-6xl font-sans font-bold text-shadow-green-200 text-shadow-md">
        Protect Your Passwords
      </div>
      <div className='text-green-600 text-2xl my-2'>No need to remember passswords now!</div>
    <div className="form my-5">
      <button className='bg-green-600 w-40 h-15 m-5 text-white shadow-2xl hover:bg-green-500' onClick={()=>navigate("/login")}>Sign In</button>
      <button className='bg-green-600 w-40 h-15 m-5 text-white shadow-2xl hover:bg-green-500' onClick={()=>navigate("/register")}>Sign Up</button>
    </div>
    </div>
    </>
  )
}

export default HomePage
