import React, { createFactory, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';



const RegisterPage = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    async function register(e) {
        e.preventDefault()
        
           const response = await fetch("http://localhost:4001/register", {
                method: 'POST',
                body: JSON.stringify({ userName, password }),
                headers: { "Content-Type": "application/json" }
            })
        if(response.status === 200){
            toast.success("Succesfully Registered!")
        }
        else{
            toast.error("failed! Try Again!")
        }
    }


    return (
        <form className='register' onSubmit={register}>
            <h1>Register</h1>
            <input type="text"
                value={userName}
                onChange={e => setUserName(e.target.value)}
                placeholder="Name" />
            <input type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Password" />
            <button>Register</button>
        </form>
    )
}

export default RegisterPage