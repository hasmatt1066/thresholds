$(document).ready(function() {
    $('#flipbook').turn({
        width: 1600,
        height: 800,
        autoCenter: true,
        display: 'single', // Start with single page for cover
        pages: 6,
        when: {
            turning: function(event, page) {
                if (page === 1) {
                    $('#flipbook').turn('display', 'single'); // Keep cover as single
                } else {
                    $('#flipbook').turn('display', 'double'); // Switch to double for spreads
                    $('.page:not(.cover)').css('display', 'block'); // Show non-cover pages
                }
            },
            turned: function(event, page) {
                if (page === 1) {
                    $('.page.cover').css({
                        width: '80vmin',
                        height: '80vmin',
                        display: 'flex'
                    });
                } else {
                    $('.page.cover').hide(); // Hide cover on page flip
                }
            }
        }
    });
});
