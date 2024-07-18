import React from 'react';
import './Home.css'; // Import CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <div className="banner">
        <img src="/images/companybanner.png" alt="Company Banner" className="banner-image" />
      </div>
      <div className="content">
        <h2>Welcome to CEW Network</h2>
        <p>
          CEW Network is dedicated to fostering a collaborative environment where employees can
          share innovative thoughts, celebrate company events, and grow together.
        </p>
        <div className="image-grid">
          <img src="/images/pic1.jpeg" alt="pic1" className="grid-image" />
          <img src="/images/pic2.jpeg" alt="pic2" className="grid-image" />
          <img src="/images/pic3.jpeg" alt="pic3" className="grid-image" />
        </div>
        <div className="about-section">
          <h3>About Us</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero
            malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
          </p>
          <h3>Reach out to us:</h3>
          <ul className="contact-links">
            <li><a href="mailto:info@cewnetwork.com">Email</a></li>
            <li><a href="https://twitter.com/cewnetwork" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://www.facebook.com/cewnetwork" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.linkedin.com/company/cewnetwork" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://www.instagram.com/cewnetwork" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Home;
