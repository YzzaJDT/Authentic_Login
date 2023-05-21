import Navbar from "../Component/Navbar";

export default function MainLayout({children}){
    return(
      <div>
    <Navbar/>
              {children}
      </div>
              
       
    )
}