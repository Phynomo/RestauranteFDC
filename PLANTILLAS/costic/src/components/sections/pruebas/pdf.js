import React, { useEffect, useState } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import axios from 'axios';

function PDFDocument() {
  // creamos el documento PDF
  const doc = new jsPDF();

    const [data, setData] = useState([]);
    useEffect(() => {
      const fetchData = () => {
          axios.get("api/Facturas/Listado")
            .then(response => {
              setData(response.data.data)
            })
            .catch(error => {
              console.log('Error en la solicitud Axios:', error);
            });
          };
   
          fetchData();
    }, []);

    const header = function (data) {
      doc.setFontSize(18);
      const pageWidth = doc.internal.pageSize.width;
      doc.setTextColor(40);
    
      // Agregar imagen
      doc.addImage('https://i.ibb.co/gt5zMF1/FDCNegro.jpg', 'JPG',  pageWidth-40,5, 24, 24);

    
      // Agregar texto
      doc.text("Reporte de facturas", data.settings.margin.left + 0, 22);
    };

      const footer = function (data) {
        const pageCount = doc.internal.getNumberOfPages();
        const currentPage = data.pageNumber;
        const pageWidth = doc.internal.pageSize.width;
        const date = new Date().toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        const text = `Documento generado por Phynomo el ${date}`;
        const textWidth = doc.getTextWidth(text);
        const textX = (pageWidth*1.3) - textWidth;
        doc.setFontSize(10);
        doc.text(`Página ${currentPage}`, data.settings.margin.left, doc.internal.pageSize.height - 10);
        doc.text(text, textX, doc.internal.pageSize.height - 10);
      };
      
  //  doc.autoTableAddPage({
  //    addPageContent: header,
  //  });

  // añadimos contenido al PDF utilizando jspdf-autotable
  doc.autoTable({
    head: [['Id', 'Cliente','Metodo pago','Fecha', 'Sucursal', 'Estado']],
    body: data.map((row) => [
      row.fact_Id,
      row.clie_NombreCompleto,
      row.metp_Descripcion,
      new Date(row.fact_Fecha).toLocaleDateString('es-ES', {day: '2-digit', month: '2-digit', year: 'numeric'}),
      row.sucu_Nombre,
      row.fact_Cerrada ? 'Cerrado' : 'Abierto'
    ]),    
    didDrawPage: function (data) {
        header(data);
        // agregamos la paginación
        footer(data);
      },
      margin: { top: 30, bottom:20 } 
  });

  // obtenemos una URL del PDF para mostrarlo en un iframe
  const pdfUrl = doc.output('dataurl');

  // mostramos el documento PDF en un iframe
  return (
    <div style={{ height: '100vh' }}>
      <iframe src={pdfUrl} style={{ width: '100%', height: '100%' }} />
    </div>
  );
}

export default PDFDocument;
