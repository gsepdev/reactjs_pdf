
import React, { Component } from "react";
import './App.css'

import me from './components/sample.pdf'

import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


export default class App extends Component {

  state = { numPages: null, pageNumber: 1 };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  goToPrevPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
  goToNextPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber + 1 }));


  render() {
    const { pageNumber, numPages } = this.state;
 /*const width = useWindowWidth();*/
    return (

      <div>
        <nav>
          <button onClick={this.goToPrevPage}>Prev</button>
          <button onClick={this.goToNextPage}>Next</button>

           <div class="topnav-right">

                <a href = {me} target = "_blank">Download Pdf</a>

             </div>
      </nav>


          <div className="pdf">
          <Document  style={{width:'800%', height:'100%'}}

            file={me}

            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} />
          </Document>
        </div>

        <p>
          Page {pageNumber} of {numPages}
        </p>

      </div>
    );
  }
}
