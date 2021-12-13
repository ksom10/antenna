import React from 'react';
import './Widgets.css';
import SearchIcon from '@material-ui/icons/Search';
import { TwitterTimelineEmbed,
TwitterShareButton,
TwitterTweetEmbed} from "react-twitter-embed";

function Widgets() {
    return (
        <div className="widgets">
            

            <div className="widgets__widgetContainer">
                <h2>What's Happening</h2>
                <TwitterTweetEmbed tweetId={"1469083189486444546"}></TwitterTweetEmbed>
            </div>
        </div>
    )
}

export default Widgets
