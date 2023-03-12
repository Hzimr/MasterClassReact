import './Tweet.css'
import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react'
import { Link } from 'react-router-dom'

interface TweetProps {
    content: string
}

export function Tweet(props: TweetProps) {
    
    return (
        <Link to="/Status" className="tweet">
            <img src="https://github.com/hzimr.png" alt="Hítalo Rodrigues" />

            <div className="tweet-content">
                <div className="tweet-content-header">
                    <strong>Hítalo Rodrigues </strong>
                    <span>@HzimR</span>
                    <p>{props.content}</p>

                    <div className="tweet-content-footer">
                        <button type="button">
                            <ChatCircle />
                            20
                        </button>
                        <button type="button">
                            <ArrowsClockwise />
                            20
                        </button>
                        <button type="button">
                            <Heart />
                            20
                        </button>

                    </div>
                </div>
            </div>
        </Link>
    )
}