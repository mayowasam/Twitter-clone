import React, { useState } from 'react'
import db from '../firebase'
import { Avatar, Button } from '@material-ui/core'
import ImageIcon from '@material-ui/icons/Image'
import GifIcon from '@material-ui/icons/Gif'
import BarChartIcon from '@material-ui/icons/BarChart'
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions'
import EventIcon from '@material-ui/icons/Event'
import avatar from '../images/bus.jpg'

import './Tweetbox.css'

function TweetBox() {
    const [tweet, setTweet] = useState('')
    const [tweetImage, setTweetImage] = useState('')

    console.log(tweet)

    const handleSubmit = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            displayName:'Mayowa',
            handle: "mayowa",
            image: tweetImage,
            text: tweet,
            verified: true,
            avatar:'https://images.unsplash.com/photo-1521714161819-15534968fc5f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'

        })

        setTweet("");
        setTweetImage("");

    }




    return (
        <div className="tweetBox">

            <form>
                <div className="tweetBox__input">
                    <Avatar src={avatar} className="tweetBox__avatar" />
                    <input type='text' placeholder="What's happening?" value={tweet} onChange={e => setTweet(e.target.value)} />
                </div>
                <div className="tweetBox__icons">
                    <ImageIcon onClick={e => setTweetImage(e.target.value)} />
                    <GifIcon />
                    <BarChartIcon />
                    <EmojiEmotionsIcon />
                    <EventIcon />
                    <Button type='submit' className="tweetBox__btn" onClick={handleSubmit}>Tweet</Button>

                </div>
            </form>



        </div>
    )
}

export default TweetBox
