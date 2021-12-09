import React from 'react'
import AddCourse from './addCourse/AddCourse';
import "./Courses.css";
import Negotiation from './Negotiation/Negotiation';
import Registrants from './Negotiation/Registrants/Registrants';
import Search from './search/Search';
function Courses() {
    return (
        <div className="courses">
            <div className="courses__topWrap">
                <Search />
                <AddCourse />
            </div>
            <Negotiation/>             
        </div>
    )
}

export default Courses
