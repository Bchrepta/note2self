import React from "react"
import { useReactMediaRecorder } from "react-media-recorder";

export default function RecordView() {
  const {
    status,
    startRecording,
    stopRecording,
    mediaBlobUrl,
  } = useReactMediaRecorder({ video: true });

  let msg = "";

  if (status != "idle") {
      msg = status;
  };

  return (
    <>
    <div><video src={mediaBlobUrl} controls autoPlay loop /></div>
    <div>
      <button onClick={startRecording}>Start Recording</button>
      <button onClick={stopRecording}>Stop Recording</button>
      <h6>{msg}</h6>
    </div>
    </>
  );
};