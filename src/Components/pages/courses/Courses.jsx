import React from 'react'
import AddCourse from './addCourse/AddCourse';
import "./Courses.css";
import Search from './search/Search';
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
               
                


                <div className="courses__innerBottomWrap">
                    <table cellSpacing="20" cellPadding="10">
                        {/* <div className="course__innerRowHead"> */}
                        <tr>
                            <th>Session</th>
                            <th>Status</th>
                            <th>Course Name</th>
                            <th>Begin Date</th>
                            <th>End Date</th>
                            <th>Regstration</th>
                            <th>Trainers</th>
                            <th>Certificate</th>
                        </tr>
                        {/* </div> */}
                        {/* <div className="course__innerRow"> */}
                        <tr>
                            <td>3</td>
                            <td>Live</td>
                            <td>Negotiation</td>
                            <td>29/05/2021</td>
                            <td>12/06/2021</td>
                            <td>60</td>
                            <td>degfde</td>
                            <td>Yes</td>
                        </tr>
                        {/* </div> */}

                    </table>
                </div>
            </div>
        </div>
    )
}

export default Courses
