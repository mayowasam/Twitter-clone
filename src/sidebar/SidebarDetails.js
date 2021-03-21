import React from 'react'
import './SidebarDetails.css'

function SidebarDetails(props) {
    const { active , Icon , title } = props //destructuring props
    return (
        <div className={`sidebardetails ${active && "sidebardetails__active"}`}>
            <Icon />
            <h2>{title}</h2>
        </div>
    )
}

export default SidebarDetails
