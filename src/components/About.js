import React from 'react'
import logo from "../img/jarett.png";
import logo2 from "../img/ben.png";
import logo3 from "../img/adrian.png";
import logo4 from "../img/jess.png";
import logo5 from "../img/neil.png";
export default function About() {
  return (
    <>
    <h2> About us </h2>
    <p>Note2Self is an NLP-based project which aims to transform lecture recordings into well formatted, informative lecture notes. This project was motivated by the increased necessity of lecture notes during the Covid-19 pandemic. Given that many classes now automatically have recorded lectures, but lack clear and concise automated lecture notes opens up the possibility for applications to be developed in this area. </p>
    <p>Note2Self utilizes a hardware setup of a camera and a microphone to capture the lecture, AWS Transcribe to get the transcript, and GPT-3 tools to generate a well-formatted set of lecture notes.</p>


    <p></p>
    <p></p>

    <h2> Our team </h2>
    <div class="container">
		<table><tr>
    		<td>
    			<img src={logo}/>
    			<p> Jarett Schwartz </p>
    		</td>
    		<td>
    			<img src={logo2}/>
    			<p> Ben Chrepta </p>
    		</td>
    		<td>
    			<img src={logo3}/>
    			<p> Adrian Wang </p>
    		</td>
     		<td>
    			<img src={logo4}/>
    			<p> Jessica Ramses</p>
    		</td>
    		<td>
    			<img src={logo5}/>
    			<p> Neil Antrassian </p>
    		</td>
    	</tr></table>
   </div>

    </>
  );
}
