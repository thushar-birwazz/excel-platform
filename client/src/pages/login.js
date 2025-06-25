import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
    return (
        <div className='flex items-center justify-center'>
            <form className='mt-20'>

                <header className="">

                    <h1 className='text-5xl text-center'>Login</h1>
                    <p className='mt-7 text-xl text-center'>Please login to existing account</p>

                </header>
                <div className='h-full p-7 flex flex-col w-96 mt-10 border-2 border-slate-950 border-solid  rounded-xl'>
                    <label className='text-2xl'>Email:</label>
                    <input className='mt-3 mb-4 border-2 border-slate-950 border-solid rounded-3xl h-10 pl-3' type="email" placeholder="Enter your Email:" />
                    <label className='mt-4 text-2xl'>Password:</label>
                    <input className='mt-3 mb-4 border-2 border-slate-950 border-solid rounded-3xl h-10 pl-3' type="password" placeholder="Enter your password" />
                    <button className='mt-6 text-2xl bg-black text-white w-28 h-14 self-center border-2 border-gray-400 border-solid rounded-3xl' type='submit'>Submit</button>
                    <p className='mt-5'>Create a new account <Link to="/register">Register</Link></p>
                </div>

            </form>
        </div>
    );
}
export default Login;