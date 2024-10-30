$(document).ready(function() {
    // Initialize the flipbook
    $('#flipbook').turn({
        width: 1600,          // Full width for two-page spreads
        height: 800,          // Height for spreads
        autoCenter: true,
        display: 'single',    // Start with single page display for cover
        pages: 6,             // Total pages
        when: {
            turning: function(event, page) {
                if (page === 1) {
                    $('#flipbook').turn('display', 'single');  // Show the cover as a single page
                } else {
                    $('#flipbook').turn('display', 'double');  // Show spreads as double pages
                }
            }
        }
    });
});
