import React, { useState } from "react";
import PostCard from "./components/PostCard/PostCard";
import "./App.css";

const posts = [
  {
    id: 1,
    type: "image",
    src: "./assets/asset_majalengka/IMG-20250212-WA0033.jpg",
    caption: "Foto sisi halaman depan rumah.",
  },
  {
    id: 2,
    type: "image",
    src: "./assets/asset_majalengka/IMG-20250212-WA0034.jpg",
    caption: "Foto sisi halaman depan rumah.",
  },
  {
    id: 3,
    type: "image",
    src: "./assets/asset_majalengka/IMG-20250212-WA0039.jpg",
    caption: "Foto sisi kanan rumah.",
  },
  {
    id: 4,
    type: "image",
    src: "./assets/asset_majalengka/IMG-20250212-WA0035.jpg",
    caption: "Foto sisi kiri rumah.",
  },
  {
    id: 5,
    type: "video",
    src: "./assets/asset_majalengka/0214(1).mp4",
    caption:
      "Video record halaman depan rumah, yang mana berhadapan langsung dengan jalan dan SDN Sukamulya 1.",
  },
  {
    id: 6,
    type: "video",
    src: "./assets/asset_majalengka/0214(2).mp4",
    caption:
      "Video record halaman depan rumah sampai ke belakang rumah, dengan luas tanah 19,5 Bata.",
  },
  {
    id: 7,
    type: "video",
    src: "./assets/asset_majalengka/0214.mp4",
    caption: "Video record dari SDN Sukamulya 1 menuju rumah.",
  },
  {
    id: 8,
    type: "video",
    src: "./assets/asset_majalengka/0214(3).mp4",
    caption: "Video record kondisi dalam rumah.",
  },
  {
    id: 9,
    type: "image",
    src: "./assets/asset_majalengka/IMG-20250212-WA0036.jpg",
    caption: "Foto.",
  },
  {
    id: 10,
    type: "image",
    src: "./assets/asset_majalengka/IMG-20250212-WA0037.jpg",
    caption: "Foto.",
  },
  {
    id: 11,
    type: "image",
    src: "./assets/asset_majalengka/IMG-20250212-WA0031.jpg",
    caption: "Foto.",
  },
  {
    id: 12,
    type: "image",
    src: "./assets/asset_majalengka/IMG-20250212-WA0038.jpg",
    caption: "Foto.",
  },
];

const App = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const handlePostClick = (post) => setSelectedPost(post);
  const handleCloseModal = () => setSelectedPost(null);

  return (
    <div className="app">
      <h1 className="title">Dijual Rumah</h1>

      <div className="header">
        <ul>
          <li>
            <span>Luas Tanah:</span> 19,5 Bata.
          </li>
          <li>
            <span>Sertifikat Hak Milik (SHM):</span> a.n SAMSURI.
          </li>
          <li>
            <span>Lokasi:</span> Desa Sukamulya, Kertajati, Majalengka, Jawa
            Barat.
          </li>
          <li>
            <span>Google Maps:</span>
            <a
              href="https://maps.app.goo.gl/yw4TY8gqqbbXa6ig9"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              https://maps.app.goo.gl
            </a>
          </li>
          <li>
            <span>Jarak ke Bandara Internasional:</span> 12 menit.
          </li>
          <li>
            <span>Jarak ke Tol Cipali:</span> 15 menit.
          </li>
          <li>
            <span>Hubungi:</span> 0812-1929-9086 (SAMSURI)
          </li>
        </ul>
      </div>

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
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
