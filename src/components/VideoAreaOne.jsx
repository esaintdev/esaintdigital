import React from 'react'
import { Link } from 'react-router-dom'

const VideoAreaOne = () => {
    return (
        <section className='bg-dark'>
            <div className="video-area-1">
                <div className="container">
                    <div className="video-wrap">
                        <img src="assets/img/normal/video-thumb-1-1.png" alt="img" />
                        <Link
                            to="https://www.youtube.com/watch?v=P7fi4hP_y80"
                            className="play-btn style5 popup-video"
                        >
                            <i className="fas fa-solid fa-play" />{" "}
                        </Link>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default VideoAreaOne