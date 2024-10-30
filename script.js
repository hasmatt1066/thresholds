$(document).ready(function() {
    // Initialize the flipbook
    $('#flipbook').turn({
        width: 1600,
        height: 800,
        autoCenter: true,
        display: 'single', // Start with single page for cover
        pages: 6,
        when: {
            turning: function(event, page) {
                if (page === 1) {
                    $('#flipbook').turn('display', 'single'); // Show cover as a single page
                } else {
                    $('#flipbook').turn('display', 'double'); // Show spreads as double pages
                    $('.page:not(.cover)').css('display', 'block'); // Show other pages after the cover
                }
            },
            turned: function(event, page) {
                if (page === 1) {
                    $('.page.cover').css({
                        display: 'flex',
                        width: '80vmin',
                        height: '80vmin'
                    });
                } else {
                    $('.page.cover').css('display', 'none'); // Hide cover after flipping
                }
            }
        }
    });
});
