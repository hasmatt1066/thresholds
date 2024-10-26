$(document).ready(function() {
    // Initialize the turn.js flipbook
    $('#flipbook').turn({
        width: 1600,  // Total width for two pages
        height: 800,  // Height for two-page spreads
        autoCenter: true,
        gradients: true,
        elevation: 50,
        pages: 6,  // Total number of pages
        when: {
            turning: function(event, page, view) {
                // Use single display mode only for the cover (page 1)
                if (page === 1) {
                    $('#flipbook').turn('display', 'single');
                } else {
                    $('#flipbook').turn('display', 'double');
                }
            }
        }
    });
});
