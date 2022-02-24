import React from "react";
import VideoInput from "./VideoInput";
import Record from "./Record";
import "../styles.css";

export default function VideoUpload() {
  return (
    <div className="App">
      <h1>New Recording</h1>
      <Record />
      <h1>Video upload</h1>
      <VideoInput width={400} height={300} />
    </div>
  );
}
