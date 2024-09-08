// Set the PDF.js worker src
pdfjsLib.GlobalWorkerOptions.workerSrc = 'pdfjs/pdf.worker.js';

// URL of the PDF file
const url = 'YOUR_PDF_URL_HERE.pdf';

// Asynchronous function to render the PDF
async function renderPDF() {
    const loadingTask = pdfjsLib.getDocument(url);
    const pdf = await loadingTask.promise;
    
    // Fetch the first page
    const page = await pdf.getPage(1);
    
    // Prepare the canvas using PDF page dimensions
    const viewport = page.getViewport({ scale: 1 });
    const canvas = document.getElementById('pdf-canvas');
    const context = canvas.getContext('2d');
    
    canvas.height = viewport.height;
    canvas.width = viewport.width;
    
    // Render the PDF page into the canvas context
    const renderContext = {
        canvasContext: context,
        viewport: viewport
    };
    
    await page.render(renderContext).promise;
}

// Call the function to render the PDF
renderPDF();
