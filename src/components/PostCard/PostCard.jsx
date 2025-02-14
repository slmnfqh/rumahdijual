import React from "react";
import "./PostCard.css";

const PostCard = ({ type, src, caption, onClick }) => {
  return (
    <div className="post-card" onClick={onClick}>
      {type === "image" ? (
        <img src={src} alt={caption} className="post-image" />
      ) : (
        <div className="video-wrapper">
          <video className="post-video" muted>
            <source src={src} type="video/mp4" />
          </video>
          <div className="play-icon">▶</div>
        </div>
      )}
    </div>
  );
};

export default PostCard;
