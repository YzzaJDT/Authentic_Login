import { useRouter } from 'next/router';
import { auth } from './api/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useAuth } from './Context/AuthContext';
import MainLayout from './layout/Mainlayout';
export default function Sec(){
    const router = useRouter();
     const [user, loading] = useAuthState(auth);

    const signout=async()=>{
        auth.signOut();
        router.push("/")
        if(loading){
            return <div>Loading..</div>
          }
          if(!user){
            router.push("/sec")
          }
     };
  /*   if(loading){
        return <div>Loading..</div>
      }
      if(!user){
        router.push("/sec")
        return <div>user.displayName</div>
      } */
      const {logout} = useAuth()
        const Islogout = async()=>{
            logout()
            router.push("/")
        }

      
    return(
        <MainLayout>
             <div>{user? "Welcome, " + user.displayName: ""} <br/>
        {user? "Email : " + user.email: ""}</div>
        </MainLayout>
            

 
    )
}