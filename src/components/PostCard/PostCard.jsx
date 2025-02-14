import React from "react";
import "./PostCard.css";

const PostCard = ({ type, src, caption, onClick }) => {
  return (
    <div className="post-card" onClick={onClick}>
      {type === "image" ? (
        <div className="post-card-overlay">
          <img src={src} alt={caption} className="post-image" />
          <div className="overlay-text">Lihat</div>
        </div>
      ) : (
        <div className="video-wrapper">
          <video className="post-video" muted>
            <source src={src} type="video/mp4" />
          </video>
          <div className="play-icon">Tonton</div>
        </div>
      )}
    </div>
  );
};

export default PostCard;
