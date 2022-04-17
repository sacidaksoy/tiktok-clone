import { Favorite, FavoriteBorder, Message, Share } from "@mui/icons-material";
import React, { useState } from "react";
import "./VideoSidebar.css";

function VideoSidebar({likes, shares, messages}) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button">
        {liked ? (
          <Favorite fontSize="large"  onClick={(e) => {setLiked(false)}} />
        ) : (
          <FavoriteBorder onClick={(e) => {setLiked(true)}} fontSize="large" />
        )}

        <p>{liked ? parseInt(likes)+1 : likes}</p>
      </div>
      <div className="videoSidebar__button">
        <Message fontSize="large" />
        <p>{messages}</p>
      </div>
      <div className="videoSidebar__button">
        <Share fontSize="large" />
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
