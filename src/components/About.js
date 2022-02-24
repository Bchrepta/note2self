import React from 'react'

export default function About() {
  return (
    <>
    <p>Note2Self is an NLP-based project which aims to transform lecture recordings into well formatted, informative lecture notes. This project was motivated by the increased necessity of lecture notes during the Covid-19 pandemic. Given that many classes now automatically have recorded lectures, but lack clear and concise automated lecture notes opens up the possibility for applications to be developed in this area. </p>
    <p>Note2Self utilizes a hardware setup of a camera and a microphone to capture the lecture, AWS Transcribe to get the transcript, and GPT-3 tools to generate a well-formatted set of lecture notes.</p>
    </>
  );
}
