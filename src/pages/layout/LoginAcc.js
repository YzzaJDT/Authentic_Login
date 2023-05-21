import MainLayout from "./Mainlayout";

import { auth } from "../api/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useRouter } from "next/router";

//npm i react-firebase-hooks
import { useAuthState } from 'react-firebase-hooks/auth'
import { useEffect, useState } from 'react'
import { useAuth } from '../Context/AuthContext'

import { FaEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";

export default function LoginAcc() {
    
    const googleAuth = new GoogleAuthProvider();
    const isLogin=async()=>{
        const result = await signInWithPopup(auth, googleAuth);
        router.push("/sec")
    };

    const router = useRouter();
    const [user, loading] = useAuthState(auth);
        useEffect(()=>{
      console.log(user);
    
    }, [user])
// <button className='btn btn-primary' onClick={login}>Login</button>
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [isLoggingIn, setLoggingIn] = useState(true);

const {login, signup, currenUser } = useAuth()
console.log(currenUser)

const SubmitHandler=async()=>{
            if (!email || !password || password.length <=6) {
                setError('Please enter email and password')
                    return
            } else if(isLoggingIn) {
                try {
                    await login(email, password)
                    setEmail("");
                    setPassword("");
                    router.push("/sec")

                } catch (error) {
                    setError('Incorrect email or password')
                    setEmail("");
                    setPassword("");
                }
                return 
            }
             await signup(email,password);
             router.push("/sec");

    }

  return (
             <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">

                <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
                <div className='bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl'>
                   {/* Sign in */}     <div className="w-3/5 p-5">
                            <div className="text-left font-bold">
                            <span className="text-green-500">CHICAT</span>
                            </div>
                            <div className="py-10">
                                <h2 className="text-3xl font-bold text-green-500 mb-2">{isLoggingIn ? 'Sign in to Account' : 'Register in to Account'}</h2>
                                <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>
                                
                            </div>
                                <div className="flex flex-col items-center mb-11">
                                <div className="text-sm ">{error}</div>
                                    <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                                        <FaEnvelope className="text-gray-400 m-2"/>
                                        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email"/>
                                    </div>
                                    <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                                        <MdLockOutline className="text-gray-400 m-2"/>
                                        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="email" placeholder="Password"/>
                                    </div>
                                
                                    <div className="button items-center flex flex-col justify-center">
                                            <button  onClick={SubmitHandler} className="btn btn-primary" >{isLoggingIn ? 'Login' : 'Register'}</button>
                                    </div>
                                    <h2 className="mt-3 flex justify-end" onClick={()=>setLoggingIn(!isLoggingIn)}>{!isLoggingIn ? 'Login' : 'Register'}</h2>
                                
                                </div>
                        </div>
                            
                                <div className="w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
                        <p className="text-3xl">Hello, Friend</p>    
                        <div className="border-2 w-10 border-white inline-block mb-2"></div>
                        <p className="text-white-400 my-3">or use your email account</p>
                                <button className="bg-gray-100 p-2 flex items-center mt-8">
                                     <FcGoogle className="ml-5 "/>
                                    <div className=" text-lime-400 ml-5" onClick={isLogin}> Google Login</div>
                                </button>
                        </div>
                </div>
                </main>
                </div>    


  )
}
