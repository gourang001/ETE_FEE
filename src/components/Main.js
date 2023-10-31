import React from "react"
import im from "./img/im.jpg"; 
function Main(){
    return( <div className="w-full h-96 border border-gray-100 relative"> 
        <img src={im} alt="" className="h-full w-full object-cover bg-no-repeat bg-bottom"/>
        <div className="absolute bg-white top-12 left-8 p-4 flex flex-col items-start justify-center shadow-lg h-40 w-[440px]">
           <h2 className="text-3xl font-bold mb-2"> Hey guys!! welcome to PreUp 
            Start your jurney here. Happy learning !!!</h2>
        </div>
    </div>
    );
}

export default Main;