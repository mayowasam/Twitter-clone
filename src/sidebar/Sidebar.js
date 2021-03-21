import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import ListAltIcon from '@material-ui/icons/ListAlt'
import PermIdentityIcon from '@material-ui/icons/PermIdentity'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import {Button} from '@material-ui/core'
import SidebarDetails from './SidebarDetails'
import './Sidebar.css'

function Sidebar() {
    return (
        <div className="sidebar">

            <TwitterIcon className="sidebar__twittericon"/>

    
            <SidebarDetails active title="Home" Icon={HomeIcon}/>
            <SidebarDetails title="Search" Icon={SearchIcon}/>
            <SidebarDetails title="Notifications" Icon={NotificationsNoneIcon}/>
            <SidebarDetails title="Message" Icon={MailOutlineIcon}/>
            <SidebarDetails title="Bookmarks" Icon={BookmarkBorderIcon}/>
            <SidebarDetails title="Lists" Icon={ListAltIcon}/>
            <SidebarDetails title="Profile" Icon={PermIdentityIcon}/>
            <SidebarDetails title="More" Icon={MoreHorizIcon}/>


            <Button className="sidebar__btn" fullWidth>Tweet</Button>

            

        </div>
    )
}

export default Sidebar
