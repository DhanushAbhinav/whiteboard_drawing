import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const exportAsImage = async (elementId: string) => {
  const canvas = await html2canvas(document.getElementById(elementId)!);
  const imgData = canvas.toDataURL('image/png');
  const link = document.createElement('a');
  link.href = imgData;
  link.download = 'whiteboard.png';
  link.click();
};

export const exportAsPDF = async (elementId: string) => {
  const canvas = await html2canvas(document.getElementById(elementId)!);
  const imgData = canvas.toDataURL('image/png');
  const pdf = new jsPDF('p', 'mm', 'a4');
  const imgProps = pdf.getImageProperties(imgData);
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
  pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
  pdf.save('whiteboard.pdf');
};