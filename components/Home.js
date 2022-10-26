import Navbar from "./Navbar/index"
import Header from "./Header"
import Image from "next/image"
import Arrow from "../public/assets/Icons/arrowLeft.svg"

export default function Home (){
 return <div className="h-screen">
    <a name="inicio" />
    <Navbar/>
    <Header/>
    <div className="absolute left-[calc(50%-20px)]   bottom-0">
     <a href="#aboutme">
     <Image className="-rotate-90 cursor-pointer" src={Arrow} alt="arrow" width="40" height="40"/>
     </a>
    </div>
 </div>
}