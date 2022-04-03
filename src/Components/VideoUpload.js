import React from "react";
import VideoInput from "./VideoInput";
import Record from "./Record";

export default function VideoUpload() {
  return (
  	<section id="resume">
    <div className="App">
      <h1>New Recording</h1>
      <Record />
      <h1>Video upload</h1>
      <VideoInput width={400} height={300} />
    </div>
    </section>
  );
}
