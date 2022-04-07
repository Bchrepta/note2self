import React from "react"
import { useReactMediaRecorder } from "react-media-recorder";
import { POST_VIDEO } from "../BackendPaths";

export default function RecordView() {
  const {
    status,
    startRecording,
    stopRecording,
    mediaBlobUrl,
  } = useReactMediaRecorder({ video: true });

  let msg = "";

  const [source, setSource] = React.useState();
  const [rawFile, setRawFile] = React.useState();

  const handleFileChange = () => {
    stopRecording()
    const url = mediaBlobUrl
    console.log(url)
    setSource(url);
    setRawFile(url);
  };

  const handleSubmit = (event) => {
    const data = new FormData();
    data.append('file', rawFile);
    data.append('url', source);
    fetch(POST_VIDEO, {
      method: 'POST',
      body: data,
    }).then((response) => {
      console.log(response.json());
    })
    console.log(rawFile);
  }

  if (status != "idle") {
      msg = status;
  };

  return (
    <>
    <div><video src={mediaBlobUrl} controls autoPlay loop /></div>
    <div>
      <button onClick={startRecording}>Start Recording</button>
      <button onClick={handleFileChange}>Stop Recording</button>
      <h6>{msg}</h6>
    </div>
    </>
  );
};