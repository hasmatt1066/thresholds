$(document).ready(function() {
    // Initialize the turn.js flipbook with square dimensions by default
    $('#flipbook').turn({
        width: 1600,  // Default square width
        height: 800, // Default square height
        autoCenter: true,
        gradients: true,
        elevation: 50,
    });

    // Function to set the flipbook size dynamically based on browser window size
    function setDynamicSize() {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const minDimension = Math.min(viewportWidth, viewportHeight); // Get the smaller of width or height

        // Set the flipbook size to a proportion of the viewport (e.g., 90% of the smaller dimension)
        const flipbookSize = minDimension * 0.9;

        $('#flipbook').css({
            width: flipbookSize + 'px',
            height: flipbookSize + 'px'
        });

        // Make sure the pages are square
        const pages = $('.page');
        const pageWidth = pages.first().width();
        pages.height(pageWidth);
    }

    // Call the function on load and when the window is resized
    setDynamicSize();
    $(window).resize(setDynamicSize); // Update page sizes on window resize

    // Keyboard controls for navigation
    $(document).keydown(function(e) {
        if (e.key === "ArrowRight") {
            $('#flipbook').turn('next'); // Flip to the next page
        } else if (e.key === "ArrowLeft") {
            $('#flipbook').turn('previous'); // Flip to the previous page
        }
    });
});
