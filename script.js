$(document).ready(function() {
    // Initialize the turn.js flipbook
    $('#flipbook').turn({
        width: 1600,  // total width of two pages
        height: 800,  // height for two-page spreads
        autoCenter: true,
        gradients: true,
        elevation: 50,
        pages: 6,  // total number of pages
        display: 'single', // Set the first page to be a single page
        when: {
            turning: function(event, page, view) {
                if (page === 1) {
                    $('#flipbook').turn('display', 'single');  // Show the cover as a single page
                } else {
                    $('#flipbook').turn('display', 'double');  // Show the rest as a double-page spread
                }
            }
        }
    });

    // Call adjustForCoverPage whenever the page changes
    $('#flipbook').bind('turned', function(event, page) {
        adjustForCoverPage();
    });

    // Initial call when the document loads
    adjustForCoverPage();
});
