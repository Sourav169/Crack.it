import React from "react";

import SinglePagePDFViewer from "./single-page";
import AllPagesPDFViewer from "./all-pages";

/* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/
import samplePDF from "../pdf/sbi.pdf";
import samplePDF1 from "../pdf/cat.pdf";
import samplePDF2 from "../pdf/jee.pdf";

import "./style.css";

 function previous(props) {
   const id=props.match.params.id
  return (
    <div className="App">
      <h4>Single Page</h4>
     
      <SinglePagePDFViewer pdf={samplePDF} />

      <hr />

      <h4>All Pages</h4>
      <div className="all-page-container">
        <AllPagesPDFViewer pdf={samplePDF} />
      </div>

      <hr />
    </div>
  );
}
export default previous;