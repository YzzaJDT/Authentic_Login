import { useAuth } from "../Context/AuthContext"
import { useRouter } from 'next/router';

export default function Navbar(){
    const router = useRouter();
    const {logout} = useAuth()
    const Islogout = async()=>{
        logout()
        router.push("/")
    }
    return (
        <div className="container mx-auto ">
        <nav className='flex items-center flex-wrap m-5'>
            <div className="inline-flex items-center"> <span className='text-xl text-slate-900 font-medium tracking-wide cursor-pointer' >CHICHAT</span></div>
            <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">                      
                <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-slate-700 cursor-pointer font-bold items-center justify-center'
                onClick={Islogout} >
                    Logout
                </a>
            </div>
        </nav>
    </div>
    )
}