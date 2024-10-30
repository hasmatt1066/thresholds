$(document).ready(function() {
    $('#flipbook').turn({
        width: 1600,
        height: 800,
        autoCenter: true,
        display: 'single', // Set cover as single page
        pages: 6,
        when: {
            turning: function(event, page) {
                if (page === 1) {
                    $('#flipbook').turn('display', 'single'); // Cover page as single
                } else {
                    $('#flipbook').turn('display', 'double'); // Set spreads to double pages
                    $('.page:not(.cover)').css('display', 'block'); // Show rest after cover
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
                    $('.page.cover').hide(); // Hide cover on page turn
                }
            }
        }
    });
});
