$(document).ready(function() {
    // Initialize the turn.js flipbook
    $('#flipbook').turn({
    width: 1600,   // Width of the full flipbook
    height: 800,   // Height of the full flipbook
    autoCenter: true,
    display: 'single', // The cover will display as a single page
    pages: 4, // Number of pages
    when: {
        turning: function(event, page, view) {
            // After the cover (page 1), switch to two-page display
            if (page > 1) {
                $('#flipbook').turn('display', 'double');
            } else {
                $('#flipbook').turn('display', 'single');
            }
        }
    }
});

    // Function to set square dimensions for the flipbook and each page
    function setSquarePages() {
        const flipbook = $('#flipbook');
        const flipbookWidth = flipbook.width(); // Get the current flipbook width

        // Set the flipbook height to half the width to maintain the 2:1 aspect ratio
        const flipbookHeight = flipbookWidth / 2;
        flipbook.height(flipbookHeight);

        // Now, ensure each page is a square by making the height equal to the width of a page
        const pages = $('.page');
        const pageWidth = pages.first().width(); // Get the width of one page (which should be half of the flipbook)
        pages.height(pageWidth); // Set the height to be equal to the page width to make squares
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
