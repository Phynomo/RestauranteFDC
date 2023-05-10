import React, { Component } from 'react';
import $ from 'jquery';
import SelectMultiple from './select';
import generatePDF from './pdf';
import Duallist from './duallist.js';
import { PDFViewer } from '@react-pdf/renderer';

class Content extends Component {
  render() {
      return (
          <div className="ms-content-wrapper">
             <Duallist></Duallist>
          </div>
      );
  }
}

export default Content;