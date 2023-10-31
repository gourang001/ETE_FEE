import React from "react"
// import { StarIcon } from "@heroicons/react/solid"
import im2 from "./img/im2.jpg"; 
function Courseno({item}){
    return (
        <div className="flex flex-col items-start space-y-[1px]">
            <img src={item.img} className="h-32 w-full"/>
            <h2 className="font-bold text-md pt-1">{item.title}</h2>
            <h2 className="text-xs text-gray-700">{item.username}</h2>
            <div className="flex space-x-1">
                <h3 className="text-orange-800 font-bold text-sm">{item.vote}</h3>
                {/* <div className="flex items-center">
                    <StarIcon className="w-4 text-orange-400"/>
                    <StarIcon className="w-4 text-orange-400"/>
                    <StarIcon className="w-4 text-orange-400"/>
                    <StarIcon className="w-4 text-orange-400"/>
                </div> */}
                <h3 className="text-xs">{item.students}</h3>
            </div>
            <div className="flex space-x-4 items-center">
                <h3 className="text-black font-bold">{item.price}</h3>
                <h3 className="text-grey-800 text-sm line-through">{item.oldPrice}</h3>
            </div>
        </div>
    );
}

export default Courseno;