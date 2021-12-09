import React from 'react'
import {  NavLink } from 'react-router-dom'
import "./Navbar.css"
function Dashboard() {
    return (
        <div className="dashboard">
            <div className="dasboard__title">
                <i class='bx bx-menu'></i>
            </div>
            <div className="dasboard__links">
                <NavLink activeClassName="actives" to="/" exact={true} className="page_links"><i className='bx bxs-dashboard dasboard__icons' ></i>Dash</NavLink>
                <NavLink activeClassName="actives" to="/courses" className="page_links"><i className='bx bx-book-open dasboard__icons'></i>Courses</NavLink>
                <NavLink activeClassName="actives" to="/discussion" className="page_links"><i className='bx bxs-school dasboard__icons'></i>Discussion</NavLink>
                <NavLink activeClassName="actives" to="/exams" className="page_links"><i className='bx bxs-school dasboard__icons'></i>Exams</NavLink>
                <NavLink activeClassName="actives" to="/crm" className="page_links"><i className='bx bxs-user-detail dasboard__icons'></i>CRM</NavLink>
                <NavLink activeClassName="actives" to="/survey" className="page_links"><i className='bx bx-pie-chart-alt-2 dasboard__icons'></i>Survey</NavLink>
                <NavLink activeClassName="actives" to="/setting" className="page_links"><i className='bx bx-cog dasboard__icons'></i>Setting</NavLink>
            </div>
            <div className="dashboard__footer">
                Version 1.0
            </div>
        </div>
    )
}
export default Dashboard
