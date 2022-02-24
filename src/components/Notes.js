import React from 'react'
import agent_file from '../pdf/Math485.pdf';

export default function Notes() {
  return (
  	<>
    <div>Notes</div>

    <a href={agent_file} download> 
    <p> Graph Theory Lecture Notes </p>
    </a>
    </>
  )
}
