import React from "react";
import { POST_VIDEO } from "../BackendPaths";

export default function VideoInput(props) {
  const { width, height } = props;

  const inputRef = React.useRef();

  const [source, setSource] = React.useState();
  const [rawFile, setRawFile] = React.useState();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setSource(url);
    setRawFile(file);
  };

  const handleChoose = (event) => {
    inputRef.current.click();
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

  return (
    <div className="VideoInput">
      <input
        ref={inputRef}
        className="VideoInput_input"
        type="file"
        onChange={handleFileChange}
        accept=".mov,.mp4"
      />
      {<button onClick={handleChoose}>Choose</button>}
      {source && (
        <video
          className="VideoInput_video"
          width="100%"
          height={height}
          controls
          src={source}
        />
      )}
      {source && <button onClick={handleSubmit}>Submit</button>}
      <div className="VideoInput_footer">{source || "Nothing selected"}</div>
    </div>
  );
}
