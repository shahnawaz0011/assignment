import React from 'react'
import AddCourse from './addCourse/AddCourse';
import "./Courses.css";
import Search from './search/Search';
import Sessions from './Sessions/Sessions';
function Courses() {
    return (
        <div className="courses">
            <div className="courses__topWrap">
                <Search />
                <AddCourse />
            </div>
            <div className="courses__bottomHead">
            <h3>Courses</h3>
            <div className="courses__bottomWrap">
            <div className="courses__buttonWrap">
                <button className="corses__button">Export</button>                
                                <button className="corses__button">Filter</button>

                </div>
                </div>
               
                

                <Sessions/>
            </div>
        </div>
    )
}

export default Courses
