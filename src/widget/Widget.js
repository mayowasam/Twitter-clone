import React from 'react'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed'
import SearchIcon from '@material-ui/icons/Search'
import './Widget.css'



function Widget() {
    return (
        <div className="widget">

            <div className="widget__searchbox">
                <SearchIcon className="widget__searchicon"/>
                <input type="text" placeholder="Search Twitter" />
            </div>

            <div className="widget__container">
                <h2>What's Happening?</h2>
                <TwitterTweetEmbed tweetId={'1376209615751372809'} />
                <TwitterTimelineEmbed 
                sourceType="profile"
                screenName="NetflixNaija"
                options={{height:400}}
                />
                <TwitterShareButton
                url={"https://twitter.com/reactjs/"}
                options={{text:'react is beautiful', via: 'NetflixNaija'}}
                />
            </div>



        </div>
    )
}

export default Widget
