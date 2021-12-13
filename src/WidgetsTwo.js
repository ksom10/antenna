import React from 'react';
import './WidgetsTwo.css';
import SearchIcon from '@material-ui/icons/Search';
import { TwitterTimelineEmbed,
TwitterShareButton,
TwitterTweetEmbed} from "react-twitter-embed";

function WidgetsTwo() {
    return (
        <div className="widgetsTwo">
            

            <div className="widgetsTwo__widgetContainer">
                <h2>Who to Follow</h2>
                <TwitterTimelineEmbed sourceType="profile" screenName="elonmusk" options={{ height: 400 }}></TwitterTimelineEmbed>
                <TwitterShareButton></TwitterShareButton>
            </div>
        </div>
    )
}

export default WidgetsTwo;
