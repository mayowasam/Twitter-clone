import React, { useState, useEffect } from 'react'
import db from '../firebase'
import './Feed.css'
import Post from './Post'
import TweetBox from './TweetBox'

function Feed() {

    const [post, setPost] = useState([])


    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => {
            console.log(snapshot)
            console.log(snapshot.docs)
            setPost(snapshot.docs.map(doc => {
                console.log(doc)
                console.log(doc.data())
                return doc.data()
            }))


        })
    }, [])
    return (
        <div className='feed'>

            <div className='feed__header'>
                <h2>Home</h2>
            </div>

            <TweetBox />

            {
                post.map(doc => (
                    <Post
                    displayName={doc.displayName}
                    avatar={doc.avatar}
                    image={doc.image} 
                    text={doc.text}
                    handle={doc.handle}
                    verified={doc.verified}/>

                ))

            }

        </div>
    )
}

export default Feed

