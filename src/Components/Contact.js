import React from "react";
import { Fade, Slide } from "react-reveal";
import { GET_PDFS } from '../BackendPaths';
import { unzip } from 'unzipit';
import pdf_logo from '../pdf.png'

export default function Contact(props) {

  const [pdfs, setPdfs] = React.useState([]);

  React.useEffect(() => {
    fetchOnStart()
  }, []);

  const fetchOnStart = () => {
    fetch(GET_PDFS, {
      method: 'GET',
    }).then((response) => {
      response.blob().then( async (b) => {
        console.log(b)
        try {
          const { entries } = await unzip(b)
          console.log(entries);
          const tmp = [];
          for (const [key, value] of Object.entries(entries)) {
            if (key.substring(key.length - 3) != 'zip') {

              const pdf = await value.arrayBuffer();
              const blob = new Blob([pdf], {
                type: 'application/pdf'
              });
              const fileURL = URL.createObjectURL(blob);
              tmp.push([key, fileURL]);
            }
          };
          setPdfs(tmp);
          console.log('Extraction complete');
        } catch (err) {
          console.log(err)
        }
      });
      return response;
    })
  }

  return (
        <div>
        <Fade bottom duration={1000}>
          <div className="row section-head">
              
          </div>
        </Fade>

        <div className="row">
          <Slide left duration={1000}>
            <div className="eight columns">


            </div>
          </Slide>

          <Slide right duration={1000}>
            <aside className="four columns footer-widgets">

              <div className="widget widget_tweets">
                
              </div>
            </aside>
          </Slide>
        </div>
        {pdfs.map(el => 
          <a key={el[0]} href={el[1]}>
            <img src={pdf_logo} height='150' width='75' />
            <h6 style={{color: 'rgba(50,50,255,1)'}}>{el[0]}</h6>
          </a>
        )}
      </div>
  );
}