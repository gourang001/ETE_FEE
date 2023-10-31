import React from "react"
import Course from "./Course";
import data from '../data.json'
import { useSearchParams } from "react-router-dom";

function Courses(){
    const [searchParams, setSearchParams] = useSearchParams();
    const sp = searchParams.get("csCoursePage") || "python";
    return ( 
    <div className="flex flex-col items-start mx-8 space-y-3 mt-14 mb-8">
        <h2 className="text-4xl font-bold "> A broad section of courses</h2>
        <h3 className="text-xl">Choose from 183,000 online video course with new editon published every months</h3>
    <div className="text-xs lg:text-xl flex space-x-4 ml-1 font-bold text-gray-500">
        <a href="?csCoursePage=python" ><h3>Python</h3></a>
        <a href="?csCoursePage=webdev"><h3>Web-development</h3></a>
        <a href="?csCoursePage=js"> <h3>Java Script</h3></a>
        <a href="?csCoursePage=ds"><h3>Data Science</h3></a>
        <a href="?csCoursePage=cc"><h3>Cloud Computing</h3></a>
        <a href="?csCoursePage=corejava"><h3>Core Java</h3></a>
    </div>

    <div className="text-left w-full border border-gray-400 p-7">
        <h2 className="text-2xl font-bold mb-2">Expand your career opportunities with PreUp</h2>
        <h3>
            Below you can see many courses for you development with which you can bright your future and up skill your sell and find bettwer oppertunities and succes in you life!!!
        </h3>
        <br></br><br></br><br></br>
        <div className="flex gap-4 flex-wrap lg:flex-nowrap">
            {data[sp].map((item) => (
                    <div className="h-60 w-60" key={item.id}>
                      <a href="https://www.youtube.com/watch?v=2-crBg6wpp0&pp=ygUZZnJlZWNvZGVjYW1wIHJlYWN0IGNvdXJzZQ%3D%3D"><Course item={item}/></a>
                    </div>
            ))}
        </div>
    </div>
    </div>
    );
}

export default Courses;