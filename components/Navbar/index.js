import NAVIGATION from "../../navigation/navbarRoutes"

export default function Navbar (){
    
  const items = NAVIGATION.map(({route,name})=>{
    return <a  className="navEffect" key={route} href={route}>{name}</a>
  })
    return<div className="w-full flex md:justify-center fixed top-0 bg-white z-20">
      <div className="p-6 w-full h-9 flex items-center md:w-2/4">
      <div className="flex w-full text-base justify-between font-medium md:text-lg">
      {items}
      </div>
    </div>
    </div>
}

