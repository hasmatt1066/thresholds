$(document).ready(function() {
    // Initialize the flipbook
    $('#flipbook').turn({
        width: 1600,  // Default width for two-page spreads
        height: 800,  // Default height for two-page spreads
        autoCenter: true
    });

    // Function to adjust size for the cover page
    function adjustForCoverPage() {
        const flipbook = $('#flipbook');
        const coverPage = $('.page.cover');

        if (flipbook.turn('page') === 1) {
            // If on the cover page, make the flipbook square
            flipbook.turn('size', 800, 800); // Square size for cover
        } else {
            // Otherwise, use the regular dimensions for spreads
            flipbook.turn('size', 1600, 800); // Two-page spread size
        }
    }

    // Call adjustForCoverPage whenever the page changes
    $('#flipbook').bind('turned', function(event, page) {
        adjustForCoverPage();
    });

    // Initial call when the document loads
    adjustForCoverPage();
});
