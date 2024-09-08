$(document).ready(function() {
    const pdfUrl = 'https://drive.google.com/uc?id=YOUR_FILE_ID'; // Replace with your Google Drive file ID

    pdfjsLib.getDocument(pdfUrl).promise.then(pdf => {
        const numPages = pdf.numPages;
        const flipbook = $('#flipbook');

        function renderPage(pageNum) {
            pdf.getPage(pageNum).then(page => {
                const scale = 1.5;
                const viewport = page.getViewport({ scale });
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');
                canvas.height = viewport.height;
                canvas.width = viewport.width;
                flipbook.append(canvas);

                const renderContext = {
                    canvasContext: context,
                    viewport: viewport
                };
                page.render(renderContext).promise.then(() => {
                    if (pageNum < numPages) {
                        renderPage(pageNum + 1);
                    }
                });
            });
        }

        renderPage(1);

        // Initialize flipbook
        flipbook.pdfFlip({
            width: 800,
            height: 600,
            autoCenter: true
        });
    });
});
