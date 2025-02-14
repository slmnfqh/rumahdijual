import React, { useState } from "react";
import PostCard from "./components/PostCard/PostCard";
import "./App.css";

const posts = [
  {
    id: 1,
    type: "video",
    src: "./assets/asset_majalengka/VID-20250212-WA0003.mp4",
    caption: "Video Depan Rumah",
  },
  {
    id: 2,
    type: "video",
    src: "./assets/asset_majalengka/VID-20250213-WA0001.mp4",
    caption: "Video Dalam Rumah",
  },
  {
    id: 3,
    type: "video",
    src: "./assets/asset_majalengka/VID-20250212-WA0001.mp4",
    caption: "Video Dari Sdn Sukamulya",
  },
  {
    id: 4,
    type: "video",
    src: "./assets/asset_majalengka/VID-20250212-WA0002.mp4",
    caption: "Video Depan Rumah",
  },
  {
    id: 5,
    type: "image",
    src: "./assets/asset_majalengka/IMG-20250212-WA0025.jpg",
    caption: "Foto samping rumah.",
  },
  {
    id: 6,
    type: "image",
    src: "./assets/asset_majalengka/IMG-20250212-WA0036.jpg",
    caption: "Foto samping rumah.",
  },
  {
    id: 7,
    type: "image",
    src: "./assets/asset_majalengka/IMG-20250212-WA0027.jpg",
    caption: "foto.",
  },
  {
    id: 8,
    type: "image",
    src: "./assets/asset_majalengka/IMG-20250212-WA0038.jpg",
    caption: "foto.",
  },
  {
    id: 9,
    type: "image",
    src: "./assets/asset_majalengka/IMG-20250212-WA0032.jpg",
    caption: "foto.",
  },
  {
    id: 10,
    type: "image",
    src: "./assets/asset_majalengka/IMG-20250212-WA0035.jpg",
    caption: "foto.",
  },
  {
    id: 11,
    type: "image",
    src: "./assets/asset_majalengka/IMG-20250212-WA0036.jpg",
    caption: "foto.",
  },
  {
    id: 12,
    type: "image",
    src: "./assets/asset_majalengka/IMG-20250212-WA0040.jpg",
    caption: "foto.",
  },
];

const App = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const handleCloseModal = () => {
    setSelectedPost(null);
  };

  return (
    <div className="app">
      <h1 className="title">Dijual Rumah</h1>
      <div className="post-grid">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            type={post.type}
            src={post.src}
            caption={post.caption}
            onClick={() => handlePostClick(post)}
          />
        ))}
      </div>

      {selectedPost && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {selectedPost.type === "image" ? (
              <img src={selectedPost.src} alt={selectedPost.caption} />
            ) : (
              <video controls>
                <source src={selectedPost.src} type="video/mp4" />
                Browser Anda tidak mendukung video ini.
              </video>
            )}
            <p>{selectedPost.caption}</p>
            <button className="close-button" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
