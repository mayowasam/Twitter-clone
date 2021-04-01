import React from 'react'
import { Avatar, Button } from '@material-ui/core'
import ImageIcon from '@material-ui/icons/Image'
import GifIcon from '@material-ui/icons/Gif'
import BarChartIcon from '@material-ui/icons/BarChart'
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions'
import EventIcon from '@material-ui/icons/Event'
import avatar from '../images/bus.jpg'

import './Tweetbox.css'

function TweetBox() {
    return (
        <div className="tweetBox">

            <form>
                <div className="tweetBox__input">
                    <Avatar src={avatar} className="tweetBox__avatar" />
                    <input type='text' placeholder="What's happening?" />
                </div>
                <div className="tweetBox__icons">
                    <ImageIcon />
                    <GifIcon />
                    <BarChartIcon />
                    <EmojiEmotionsIcon />
                    <EventIcon />
                    <Button className="tweetBox__btn">Tweet</Button>

                </div>
            </form>



        </div>
    )
}

export default TweetBox
