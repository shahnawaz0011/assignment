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
            <span>courses</span>
            <div className="courses__buttonWrap">
            <button><i class='bx bx-export'></i>Export</button>
            <button><i class='bx bx-filter-alt' ></i>Filter</button>
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
                            <td className="table__number"><i class='bx bx-git-branch'></i>3</td>
                            <td>Live</td>
                            <td className="table__number">Negotiation</td>
                            <td>29/05/2021</td>
                            <td>12/06/2021</td>
                            <td>60</td>
                             <td className="table__imagesTd"><img className="table__images" src="https://st2.depositphotos.com/2777531/6975/v/600/depositphotos_69759199-stock-illustration-male-person-silhouette.jpg" alt=""/>
                                 <img className="table__images" src="https://st2.depositphotos.com/2777531/6975/v/600/depositphotos_69759199-stock-illustration-male-person-silhouette.jpg" alt=""/>
                                 <img className="table__images" src="https://st2.depositphotos.com/2777531/6975/v/600/depositphotos_69759199-stock-illustration-male-person-silhouette.jpg" alt=""/>
                                 <img className="table__images" src="https://st2.depositphotos.com/2777531/6975/v/600/depositphotos_69759199-stock-illustration-male-person-silhouette.jpg" alt=""/></td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td className="table__number"><i class='bx bx-git-branch'></i>2</td>
                            <td>upcoming</td>
                            <td className="table__number">Interaction</td>
                            <td>29/05/2021</td>
                            <td>12/06/2021</td>
                            <td>60</td>
                            <td className="table__imagesTd"><img className="table__images" src="https://st2.depositphotos.com/2777531/6975/v/600/depositphotos_69759199-stock-illustration-male-person-silhouette.jpg" alt=""/>
                                 <img className="table__images" src="https://st2.depositphotos.com/2777531/6975/v/600/depositphotos_69759199-stock-illustration-male-person-silhouette.jpg" alt=""/>
                                 <img className="table__images" src="https://st2.depositphotos.com/2777531/6975/v/600/depositphotos_69759199-stock-illustration-male-person-silhouette.jpg" alt=""/>
                                 <img className="table__images" src="https://st2.depositphotos.com/2777531/6975/v/600/depositphotos_69759199-stock-illustration-male-person-silhouette.jpg" alt=""/></td>
                            <td>No</td>
                        </tr>
                        {/* </div> */}

                    </table>
                    
                </div>
                
               <div className="courses__pagination">
                Rows Per <span style={{padding:"0px 10px 10px"}}>Page 6 <i class='bx bxs-down-arrow' style={{fontSize:"0.8em"}}></i></span> <span>1-6 of 150 </span><i class='bx bx-chevron-left' style={{cursor:"pointer",fontWeight:"800"}}></i><i class='bx bx-chevron-right' style={{cursor:"pointer",fontWeight:"800"}}></i></div>
            </div>
            
    
    )
}

export default Courses