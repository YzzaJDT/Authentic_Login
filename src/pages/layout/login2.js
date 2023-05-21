import { FaEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";

export default function login2(){

    return(
       
            <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
                
        <main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
        <div className='bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl'>
           {/* Sign in */}     <div className="w-3/5 p-5">
                    <div className="text-left font-bold">
                    <span className="text-green-500">CHICAT</span>
                    </div>
                    <div className="py-10">
                        <h2 className="text-3xl font-bold text-green-500 mb-2">Sign in to Account</h2>
                        <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>
                        <p className="text-gray-400 my-3">or use your email account</p>
                    </div>
                        <div className="flex flex-col items-center ">
                            <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                                <FaEnvelope className="text-gray-400 m-2"/>
                                <input type="email" placeholder="Email"/>
                            </div>
                            <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                                <MdLockOutline className="text-gray-400 m-2"/>
                                <input type="email" placeholder="Password"/>
                            </div>
                            <div className="button items-center flex flex-col justify-center">
                                    <button className="btn btn-primary" >Login</button>
                            </div>
                        
                        </div>
                </div>
                    
                        <div className="w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
                <p className="text-3xl">Hello, Friend</p>    
                <div className="border-2 w-10 border-white inline-block mb-2"></div>
                
                </div>
        </div>
        </main>
        </div>       

    )
}