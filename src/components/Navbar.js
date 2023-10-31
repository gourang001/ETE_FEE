import React from "react"
import{
    ShoppingCartIcon,
    SearchIcon,
    GlobeIcon,
    MenuIcon,
} from "@heroicons/react/outline";
import { useParams } from "react-router-dom";


function Navbar(props){
    console.log(props.login)
    return ( <div>
        <div className=" flex space-x-4 bg-white h-[74px] shadow-lg text-center justify-between items-center px-4 ">
            <MenuIcon className="h-6 w-6 md:hidden"/>
       <a href="../"><h2 className="text-3xl font-bold">PreUp</h2></a> 
        {/* <h3 className="hidden text-sm md:block">Categories</h3> */}
        <form className="hidden bg-[#f8fafb] md:flex border border-black rounded-3xl flex-1 h-12 items-center">
            <SearchIcon className="h-5 w-5 mx-4 text-gray-400"/>
            <input type="text" placeholder="Serch for anything"
            className="bg-transparent text-sm outline-none"
            />
        </form>
        <a href="../"><h3 className="hidden text-sm lg:block">PreUp Business</h3></a>
        <a href="../"><h3 className="hidden text-sm lg:block md:hidden">Teach on PreUp</h3></a>
        <div className="flex">
            <SearchIcon className="h-6 w-6 text-gray-400 md:hidden"/>
            <a href="#"><ShoppingCartIcon className="h-6 w-6"/></a>
        </div>
            {
                !props.login?
                <div className="hidden md:flex pr-4 space-x-4 justify-end">
                    <a href="/login"><button className="border border-black h-10 text-sm font-bold w-20 hover:bg-[#F5F5F5]" >LOG IN</button></a>
                    <a href="/signup"><button className="border bg-black text-white border-black h-10 text-sm font-bold w-20 ">SIGN UP</button></a>
                    <button className="border border-black w-10 flex items-center justify-center hover:bg-[#F5F5F5]">
                        <GlobeIcon className="h-5 w-5"/>
                    </button>
                </div>
                :
                props.bool?
                <div className="hidden md:flex pr-4 space-x-4 justify-end">
                    <button onClick={props.logout}className="border border-black h-10 text-sm font-bold w-20 hover:bg-[#F5F5F5]" >LOG OUT</button>
                    <button className="border border-black w-10 flex items-center justify-center hover:bg-[#F5F5F5]">
                        <GlobeIcon className="h-5 w-5"/>
                    </button>
                </div>
                :
                null
            }
        </div>
    </div>
    );
}

export default Navbar;