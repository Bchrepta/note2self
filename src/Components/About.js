import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src="img/neil.png"
                alt="Neil Antrassian"
              />
              <p> 
              Neil Antrassian
              </p>
              <img
                className="profile-pic"
                src="img/ben.png"
                alt="Ben Chrepta"
              />
              <p> 
              Ben Chrepta
              </p>
              <img
                className="profile-pic"
                src="img/jess.png"
                alt="Jessica Ramses"
              />
              <p> 
              Jessica Ramses
              </p>
              <img
                className="profile-pic"
                src="img/jarett.png"
                alt="Jarett Schwartz"
              />
              <p> 
              Jarett Schwartz
              </p>
              <img
                className="profile-pic"
                src="img/adrian.png"
                alt="Adrian Wang"
              />
              <p> 
              Adrian Wang
              </p>
            </div>
            <div className="nine columns main-col">
              <h2>About Us</h2>

              <p>Note2Self is an NLP-based project which aims to transform lecture recordings into well formatted, informative lecture notes. This project was motivated by the increased necessity of lecture notes during the Covid-19 pandemic. Given that many classes now automatically have recorded lectures, but lack clear and concise automated lecture notes opens up the possibility for applications to be developed in this area.
</p>
<p>Note2Self utilizes a hardware setup of a camera and a microphone to capture the lecture, AWS Transcribe to get the transcript, and GPT-3 tools to generate a well-formatted set of lecture notes.</p>


<p> First, the camera and microphone setup is plugged into the computer. Make sure that the correct inputs are selected when the recording is about to be done (It is also possible to upload any audio/video file to the website)
</p>

<p> After the video is submitted, it is then uploaded to an S3 bucket, where AWS Transcribe is then triggered. A transcription is run on the video, where the output will be dropped into another S3 bucket. AWS Transcribe is able to return the transcription, as well as start and end times of certain words, as well as corresponding confidences. A custom vocabulary can be uploaded to AWS Transcribe to capture uncommon words or abbreviations </p>


            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
