import React, { useRef, useCallback, useState } from "react";
import Webcam from "react-webcam";

const WebcamCapture = () => {
  const webcamRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
  }, [webcamRef]);

  return (
    <div>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={320}
        height={240}
      />
      <button onClick={capture}>Capturar Foto</button>
      {capturedImage && (
        <div>
          <h2>Foto capturada:</h2>
          <img src={capturedImage} alt="captured" />
        </div>
      )}
    </div>
  );
};

export default WebcamCapture;
