import React from 'react';
import './App.css';
import Header from './Componentes/Header';
import NavBar from './Componentes/NavBar';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import * as XLSX from 'xlsx'; // Importe usando * as XLSX

function App() {
  {/* Função para imprimir o conteúdo da tela */}
  const handlePrint = () => {
    window.print();
  };

  {/* Função para exportar o pdf do conteúdo selecionada pelo id */}
  const handleExportToPDF = () => {
    const element = document.getElementById('content-to-export');

    html2canvas(element).then((canvas) => {
      const pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 210, 297);
      pdf.save('exported-content.pdf');
    });
  };

  {/* Função para exportar o excel do conteúdo selecionada pelo id */}
  const handleExportToExcel = () => {
    const element = document.getElementById('content-to-export');
    const ws = XLSX.utils.table_to_sheet(element);

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    XLSX.writeFile(wb, 'exported-content.xlsx');
  };

  return (
    <>
      {/* Cabeçalho */}
      <Header></Header>

      <div className='flex h-max border-gray-200 border-2' id='content-to-export'>
        {/* Lado esquerdo */}
        <NavBar></NavBar>

        {/* Lado direito */}
        <div className='w-[85%] flex flex-col justify-center items-center text-sm bg-gray-100'>
          {/* CV */}
          <div className="flex justify-center gap-14 p-[4%]">
            <img src="./src/assets/cv.png" alt="cv" width={'50%'} height={'50%'}/>
            <div className='flex flex-col gap-3'>
              <button className='border-2 rounded-sm p-2 w-[160%] bg-white hover:text-blue-500' onClick={handlePrint}>Imprimir</button>
              <button className='border-2 rounded-sm p-2 w-[160%] bg-white hover:text-blue-500' onClick={handleExportToPDF}>PDF</button>
            </div>
          </div>

          {/* Excel */}
          <div className='flex flex-col justify-center items-center space-y-6 w-[100%] p-[4%]'>
            <div className='space-x-3 self-end w-[50%]'>
              <button className='border-2 rounded-sm p-2 w-[20%] bg-white hover:text-blue-500' onClick={handleExportToExcel}>Excel</button>
              <button className='border-2 rounded-sm p-2 w-[20%] bg-white hover:text-blue-500' onClick={handleExportToPDF}>PDF</button>
            </div>
            <img src="./src/assets/excel.png" alt="" width={'90%'} height={'90%'}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
