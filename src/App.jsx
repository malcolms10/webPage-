import React from 'react';
import './App.css';
import Header from './Componentes/Header';
import NavBar from './Componentes/NavBar';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import * as XLSX from 'xlsx'; 
import { IoPersonCircleOutline } from "react-icons/io5";

function App() {
  {/* Função para imprimir o conteúdo da tela */}
  const handlePrint = () => {
    const cvElement = document.getElementById('conteudo');

    if (cvElement) {
      const printWindow = window.open('', '_blank');
      printWindow.document.write('<html><head><title>Curriculum Vitae</title></head><body>');
      printWindow.document.write(cvElement.innerHTML);
      printWindow.document.write('</body></html>');
      printWindow.document.close();
      printWindow.print();
    } else {
      console.error('Elemento do CV não foi encontrado.');
    }
  };

  {/* Função para exportar o pdf do conteúdo selecionada pelo id */}
  const handleExportToPDF = (str) => {
    const element = document.getElementById(str);

    if (str === 'conteudo') {
      const pdf = new jsPDF('p', 'mm', 'a4');
      pdf.autoTable({ html: element });
      pdf.save('exported-content.pdf');
    } else {
      html2canvas(element).then((canvas) => {
        const pdf = new jsPDF('p', 'mm', 'a4');
        pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 180, 267);
        pdf.save('exported-content.pdf');
      });
    }
  };

  {/* Função para exportar o excel do conteúdo selecionada pelo id */}
  const handleExportToExcel = () => {
    const ws = XLSX.utils.aoa_to_sheet([
      ['Nome Completo', 'Inscrição', 'Número de Inscrição', 'BI', 'Estado'],
      ['Adolfo Tomás', 'Presencial', '789012', '004545787LA055', 'Em análise'],
      ['Alberto Fumokotsi', 'Presencial', '789012', '004545787LA055', 'Analisado-AT'],
    ]);

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'exported-content.xlsx');
  };

  return (
    <>
      {/* Cabeçalho */}
      <Header></Header>

      <div className='flex h-max border-gray-200 border-2'>
        {/* Lado esquerdo */}
        <NavBar></NavBar>

        {/* Lado direito */}
        <div className='w-[85%] flex flex-col justify-center items-center text-sm bg-gray-100'>
          {/* CV */}
          <div className="flex p-[4%]">

            <div className="bg-white mx-[32%] p-8 text-xs" id='conteudo'>
                    <div className="flex justify-between space-x-10">
                        <div className="">
                            <h1 className="text-2xl space-x-1">Malcolm <b>Manuel</b></h1>
                            <p>Desenvolvedor</p>
                        </div>
                        <IoPersonCircleOutline size={80}/>
                    </div>
                    <div className="flex space-x-5">
                        {/* Esquerdo */}
                        <div className="space-y-3">
                            <div>
                                <ul className="space-y-2">
                                    <li>944687570</li>
                                    <li>lukenysilva10@gmail.com</li>
                                    <li>Centralidade do kilamba</li>
                                    <li>malcolms10</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h1 className="text-lg">Habilidades</h1>
                                <ul>
                                    <li>React</li>
                                    <li>JavaScript</li>
                                    <li>Html</li>
                                    <li>Css</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h1 className="text-lg">IDIOMAS</h1>
                                <p>Inglês - Intermediário</p>
                            </div>
                            <div>
                                <h1 className="text-lg">EDUCAÇãO</h1>
                                <ul>
                                    <li>Ensino Médio</li>
                                    <li>Ensino Superior</li>
                                </ul>
                            </div>
                        </div>

                        {/* Direito */}

                        <div className="space-y-3 ">
                            <div className="space-y-2">
                                <h1 className="text-lg">Perfil</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, quos! Voluptatum ipsa dolore ullam nulla, iure quam repellendus expedita exercitationem minima hic suscipit omnis aperiam nobis incidunt ratione accusantium cupiditate.</p>
                            </div>
                            <div>
                                <h1 className="text-lg">EXPERIêNCIA</h1>
                                <p>Gestor aplicacional BMA</p>
                                <p>Rocketseat</p>
                                <p>Udemy</p>
                                <p>Curso em vídeo</p>
                                <p>Participações em maratonas de programação</p>
                            </div>
                        </div>

                    </div>
              </div>
            
            <div className='flex flex-col gap-3 absolute right-[22%]'>
              <button className='border-2 rounded-sm p-2 w-[160%] bg-white hover:text-blue-500' onClick={handlePrint}>Imprimir</button>
              <button className='border-2 rounded-sm p-2 w-[160%] bg-white hover:text-blue-500' onClick={()=>handleExportToPDF('conteudo')}>PDF</button>
            </div>
          </div>

          {/* Excel */}
          <div className='flex flex-col justify-center items-center space-y-6 w-[100%] p-[4%]'>
            <div className='space-x-3 self-end w-[50%]'>
              <button className='border-2 rounded-sm p-2 w-[20%] bg-white hover:text-blue-500' onClick={handleExportToExcel}>Excel</button>
              <button className='border-2 rounded-sm p-2 w-[20%] bg-white hover:text-blue-500' onClick={()=>handleExportToPDF('conteudo2')}>PDF</button>
            </div>
            <table className='w-[75%] bg-white border-collapse mt-20' id='conteudo2'>
              <thead>
                <tr className='font-semibold'>
                  <th className='border-2 border-black p-2'>Nome Completo</th>
                  <th className='border-2 border-black p-2'>Inscrição</th>
                  <th className='border-2 border-black p-2'>Número de Inscrição</th>
                  <th className='border-2 border-black p-2'>BI</th>
                  <th className='border-2 border-black p-2'>Estado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border-2 border-black p-2'>Adolfo Tomás</td>
                  <td className='border-2 border-black p-2'>Presencial</td>
                  <td className='border-2 border-black p-2'>789012</td>
                  <td className='border-2 border-black p-2'>004545787LA055</td>
                  <td className='border-2 border-black p-2'><p className='bg-gray-500 rounded-lg p-2 text-center'>Em análise</p></td>
                </tr>
                <tr>
                  <td className='border-2 border-black p-2'>Alberto Fumokotsi</td>
                  <td className='border-2 border-black p-2'>Presencial</td>
                  <td className='border-2 border-black p-2'>789012</td>
                  <td className='border-2 border-black p-2'>004545787LA055</td>
                  <td className='border-2 border-black p-2'><p className='bg-yellow-400 rounded-lg p-2 text-center'>Analisado-AT</p></td>
                </tr>
                <tr>
                  <td className='border-2 border-black p-2'>Alberto Fumokotsi</td>
                  <td className='border-2 border-black p-2'>Presencial</td>
                  <td className='border-2 border-black p-2'>789012</td>
                  <td className='border-2 border-black p-2'>004545787LA055</td>
                  <td className='border-2 border-black p-2'><p className='bg-yellow-400 rounded-lg p-2 text-center'>Analisado-AT</p></td>
                </tr>
                <tr>
                  <td className='border-2 border-black p-2'>Alberto Fumokotsi</td>
                  <td className='border-2 border-black p-2'>Presencial</td>
                  <td className='border-2 border-black p-2'>789012</td>
                  <td className='border-2 border-black p-2'>004545787LA055</td>
                  <td className='border-2 border-black p-2'><p className='bg-yellow-400 rounded-lg p-2 text-center'>Analisado-AT</p></td>
                </tr>
              </tbody>
          </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
