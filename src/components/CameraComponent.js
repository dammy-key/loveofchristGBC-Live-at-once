import React, { useState, useEffect, useRef } from 'react';

function CameraComponent() {
  const [stream, setStream] = useState(null);
  const [error, setError] = useState(null);
  const videoRef = useRef(null);

  useEffect(() => {
    async function getCamera() {
      try {
        const userMedia = await navigator.mediaDevices.getUserMedia({ video: true });
        setStream(userMedia);

        if (videoRef.current) {
          videoRef.current.srcObject = userMedia;
        }
      } catch (err) {
        setError(err.message);
      }
    }

    getCamera();

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [stream]);

  return (
    <div className="camera-container">
      {error && <div className="error-message">Error accessing the camera: {error}</div>}
      <video className="camera-preview" autoPlay ref={videoRef}></video>
    </div>
  );
}

export default CameraComponent;
