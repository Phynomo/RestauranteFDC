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
        doc.setTextColor(40);
        doc.setFontStyle('normal');
        doc.text('Mi Encabezado', data.settings.margin.left, 20);
      };

    const footer = function (data) {
        const pageCount = doc.internal.getNumberOfPages();
        const currentPage = data.pageNumber;
        doc.setFontSize(10);
        doc.text(`Página ${currentPage} de ${pageCount}`, data.settings.margin.left, doc.internal.pageSize.height - 10);
      };

  // añadimos contenido al PDF utilizando jspdf-autotable
  doc.autoTable({
    head: [['Id', 'Cliente', 'Sucursal']],
    body: data.map((row) => [row.fact_Id ,row.clie_NombreCompleto , row.sucu_Nombre ]),
    startY: 4,
    didDrawPage: function (data) {
        // agregamos la paginación
        footer(data);
      },
  });

//   doc.autoTableAddPage({
//     addPageContent: header,
//   });

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



// import React, { useEffect, useState } from 'react';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';
// import axios from 'axios';


// function PDFDocument() {
//   const [data, setData] = useState([]);

//   useEffect(() => {

//     const fetchData = () => {
//         axios.get("api/Facturas/Listado")
//           .then(response => {
//             setData(response.data.data)
//           })
//           .catch(error => {
//             console.log('Error en la solicitud Axios:', error);
//           });
//         };
    
//         fetchData();
//   }, []);

//   // crea el documento PDF y lo muestra en un iframe
//   function generatePDF() {
//     // creamos el documento PDF
//     const doc = new jsPDF();

//     // definimos el encabezado
//     const header = function (data) {
//       doc.setFontSize(18);
//       doc.setTextColor(40);
//       doc.setFontStyle('normal');
//       doc.text('Mi Encabezado', data.settings.margin.left, 20);
//     };

//     // definimos el pie de página
//     const footer = function (data) {
//       const pageCount = doc.internal.getNumberOfPages();
//       const currentPage = data.pageNumber;
//       doc.setFontSize(10);
//       doc.text(`Página ${currentPage} de ${pageCount}`, data.settings.margin.left, doc.internal.pageSize.height - 10);
//     };

//     // añadimos contenido al PDF utilizando jspdf-autotable
//     doc.autoTable({
//       head: [['Id', 'Cliente', 'Sucursal']],
//       body: data.map((row) => [row.fact_Id ,row.clie_NombreCompleto , row.sucu_Nombre ]),
//       startY: 4, // definimos la posición de inicio de la tabla
//       didDrawPage: function (data) {
//         // agregamos la paginación
//         footer(data);
//       },
//     });

//     // agregamos una nueva página después de la tabla
//     doc.autoTableAddPage({
//       addPageContent: header,
//     });

//     // obtenemos una URL del PDF para mostrarlo en un iframe
//     const pdfUrl = doc.output('dataurl');

//     // mostramos el documento PDF en un iframe
//     return (
//       <div style={{ height: '100vh' }}>
//         <iframe src={pdfUrl} style={{ width: '100%', height: '100%' }} />
//       </div>
//     );
//   }

//   return generatePDF();
// }

// export default PDFDocument;


// import React from 'react';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';

// function PDFDocument() {
//   // creamos el documento PDF
//   const doc = new jsPDF();

//   // añadimos contenido al PDF utilizando jspdf-autotable
//   doc.autoTable({
//     head: [['Name', 'Email', 'Country']],
//     body: [
//       ['John Doe', 'john.doe@example.com', 'USA'],
//       ['Jane Smith', 'jane.smith@example.com', 'Canada'],
//       ['Juan Pérez', 'juan.perez@example.com', 'Mexico'],
//     ],
//   });

//   // obtenemos una URL del PDF para mostrarlo en un iframe
//   const pdfUrl = doc.output('dataurl');

//   // mostramos el documento PDF en un iframe
//   return (
//     <div style={{ height: '100vh' }}>
//       <iframe src={pdfUrl} style={{ width: '100%', height: '100%' }} />
//     </div>
//   );
// }

// export default PDFDocument;