import React, { Component } from 'react';
import $ from 'jquery';
import SelectMultiple from './select';
import generatePDF from './pdf';
import { PDFViewer } from '@react-pdf/renderer';
const PreviewPDF = () => (
    <div style={{ width: '100%', height: '100vh' }}>
      <PDFViewer style={{ width: '100%', height: '100%' }}>
        <generatePDF />
      </PDFViewer>
    </div>
  );
  
  export default PreviewPDF;