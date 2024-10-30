$(document).ready(function() {
    $('#flipbook').turn({
        width: 1600,          // Full width for two-page spreads
        height: 800,          // Height for spreads
        autoCenter: true,
        display: 'single',    // Cover page is a single page
        pages: 6,
        when: {
            turning: function(event, page) {
                if (page === 1) {
                    $('#flipbook').turn('display', 'single'); // Keep cover as single page
                } else {
                    $('#flipbook').turn('display', 'double'); // Switch to double pages
                    $('.page:not(.cover)').css('display', 'block'); // Show all other pages
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
                    $('.page.cover').hide(); // Hide cover after flipping
                }
            }
        }
    });
});
