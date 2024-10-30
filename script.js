$(document).ready(function() {
    // Initialize turn.js with autoCenter enabled
    $('#flipbook').turn({
        width: 1600,
        height: 800,
        autoCenter: true,   // Center the flipbook on the screen
        display: 'single',  // Start with single-page display for cover
        pages: 6,
        when: {
            turning: function(event, page) {
                // Switch to double-page spreads after the cover page
                if (page === 1) {
                    $('#flipbook').turn('display', 'single');
                } else {
                    $('#flipbook').turn('display', 'double');
                }
            },
            turned: function(event, page) {
                if (page === 1) {
                    // Ensure the cover page is shown as a centered square
                    $('.page.cover').css({
                        width: '80vmin',
                        height: '80vmin',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    });
                } else {
                    // Hide the cover page after turning
                    $('.page.cover').hide();
                }
            }
        }
    });
});
