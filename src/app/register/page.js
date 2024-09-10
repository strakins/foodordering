'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const Register = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isUserCreated, setUserCreated] = useState(false);
  const [creatingUser, setCreatingUser] = useState(false);
  const [error, setError] = useState(false)

    
      async function handleSubmit (e) {
        e.preventDefault();
        setCreatingUser(true);
        try {
          await fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {'Content-Type': 'application/json'},
          });
          setCreatingUser(false);
          setUserCreated(true)
        } catch (error) {
          setError(true)
        }
      }
    

  return (
    <section className='my-8'>
      <h1 className='text-3xl text-center text-primary'>
        Register
      </h1>
      {
        isUserCreated && 
        (
          <div className='my-4 text-center text-emerald-600'>
            User Account Created Successfully, Proceed to <Link href={'/login'} className='text-red-400 italic'>Login</Link> 
          </div>
        )
      }
      {
        error && 
        (
          <div className='my-4 text-center text-red-600'>
            Account Creation failed, Proceed try again  
          </div>
        )
      }
      <form className='block max-w-sm mx-auto' onSubmit={handleSubmit}>
        <input 
          type='email' 
          placeholder='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
          disabled={creatingUser}
        />
        <input 
          type='password' 
          placeholder='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          disabled={creatingUser}
        />
        <button type='submit' disabled={creatingUser}>
          Submit
        </button>
        <div className='my-3 text-center '>
          or
        </div>
        <button className='flex items-center gap-4 '>
         <Image src={'/google.png'} alt='googlelogin' width={32} height={32} />
          Login with Google
        </button>
      </form>
    </section>
  )
}

export default Register;