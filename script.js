$(document).ready(function() {
    // Initialize the turn.js flipbook
    $('#flipbook').turn({
        width: 800,
        height: 600,
        autoCenter: true,
        gradients: true,
        elevation: 50,
    });

    // Function to set square dimensions for each page
    function setSquarePages() {
        const pages = $('.page'); // Select all page elements
        const pageWidth = pages.first().width(); // Get the width of the first page
        pages.height(pageWidth); // Set height equal to width to maintain square shape
    }

    // Call the function on load and when the window is resized
    setSquarePages();
    $(window).resize(setSquarePages); // Update page sizes on window resize

    // Keyboard controls for navigation
    $(document).keydown(function(e) {
        if (e.key === "ArrowRight") {
            $('#flipbook').turn('next'); // Flip to the next page
        } else if (e.key === "ArrowLeft") {
            $('#flipbook').turn('previous'); // Flip to the previous page
        }
    });
});
