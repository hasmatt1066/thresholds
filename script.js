$(document).ready(function() {
    // Initialize the turn.js flipbook
    $('#flipbook').turn({
        width: 1600,  // total width of two pages
        height: 800,  // height for two-page spreads
        autoCenter: true,
        gradients: true,
        elevation: 50,
        pages: 6,  // total number of pages
        display: 'double', // Initially display as double pages
        when: {
            turning: function(event, page, view) {
                if (page === 1) {
                    $('#flipbook').turn('display', 'single');  // Show the cover as a single page
                } else {
                    $('#flipbook').turn('display', 'double');  // Show the rest as double-page spreads
                }
            }
        }
    });
});
