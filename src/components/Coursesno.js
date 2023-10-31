import React from "react"
import Courseno from "./Courseno";
import data from '../data.json'
import { useSearchParams } from "react-router-dom";

function Coursesno(){
    
    const [searchParams, setSearchParams] = useSearchParams();
    const sp1 = searchParams.get("nocsCoursePage") || "dm";
    return ( 
    <div className="flex flex-col items-start mx-8 space-y-3 mt-14 mb-8">
        <h2 className="text-4xl font-bold "> A broad section of courses</h2>
        <h3 className="text-xl">Choose from 183,000 online video course with new editon published every months</h3>
    <div className="text-xs lg:text-xl flex space-x-4 ml-1 font-bold text-gray-500 cursor-pointer">
        <a href="?nocsCoursePage=dm"><h3>Digital-Marketing</h3></a>
        <a href="?nocsCoursePage=excel"><h3>Excel</h3></a>
        <a href="?nocsCoursePage=pd"><h3>Presonal-Development</h3></a>
        <a href="?nocsCoursePage=hr"><h3>HR</h3></a>
        <a href="?nocsCoursePage=pm"><h3>Product-Management</h3></a>
        <a href="?nocsCoursePage=editing"><h3>Editing</h3></a>
    </div>

    <div className="text-left w-full border border-gray-400 p-7">
        <h2 className="text-2xl font-bold mb-2">Expand your career opportunities with PreUp</h2>
        <h3>
            Below you can see many courses for you development with which you can bright your future and up skill your sell and find bettwer oppertunities and succes in you life!!!
        </h3>
        <div>
<br></br><br></br><br></br>
        </div>
        {/* <button className="border border-black font-bold text-sm p-2 mt-4 mb-8">Univers code</button> */}
        <div className="flex gap-4 flex-wrap lg:flex-nowrap">
            {data[sp1].map((item) => (
                    <div className="h-60 w-60" key={item.id}>
                        <a href="https://youtu.be/5BryhlKLTVY?si=dF0MVO2IqXO-v-dj"><Courseno item={item} /></a>
                    </div>
            ))}
        </div>
    </div>
    </div>
    );
}

export default Coursesno;