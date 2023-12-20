import React from 'react';
import CameraComponent from './components/CameraComponent';
import './App.css'; // Import your custom CSS for styling

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h1>Love of ChristGBC | liveatonce</h1>
      </header>
      <main className="main-content">
        <div className="video-container">
          <CameraComponent />
        </div>
        <div className="platform-selection">
          <h2>Select Platforms to Go Live:</h2>
          <label>
            <input type="checkbox" name="facebook" />
            Facebook
          </label>
          <label>
            <input type="checkbox" name="instagram" />
            Instagram
          </label>
          <label>
            <input type="checkbox" name="tiktok" />
            TikTok
          </label>
        </div>
        <button className="start-live-button">Start Live</button>
      </main>
    </div>
  );
}

export default App;
