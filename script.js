$(document).ready(function() {
    // Initialize the turn.js flipbook
    $('#flipbook').turn({
        width: 1600,  // total width of two pages for spreads
        height: 800,  // height for two-page spreads
        autoCenter: true,
        gradients: true,
        elevation: 50,
        pages: 6,  // total number of pages
        display: 'single', // Display cover as a single page
        when: {
            turning: function(event, page, view) {
                if (page === 1) {
                    // Show cover as a single page, adjust container size for cover
                    $('#flipbook').turn('display', 'single');
                    $('.flipbook').css({
                        'width': '80vmin',
                        'height': '80vmin'
                    });
                } else {
                    // Show the rest as a double-page spread
                    $('#flipbook').turn('display', 'double');
                    $('.flipbook').css({
                        'width': '1600px',
                        'height': '800px'
                    });
                }
            }
        }
    });
});
