import React from "react";

const VideoSection = () => {
  return (
    <section>
      <h2>Watch Demo</h2>

      <iframe
        width="400"
        height="200"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="Demo Video"
      ></iframe>
    </section>
  );
};

export default VideoSection;