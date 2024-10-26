$(document).ready(function() {
    $('#flipbook').turn({
        width: 1600,
        height: 800,
        autoCenter: true,
        gradients: true,
        elevation: 50,
        pages: 6,
        display: 'single',  // Set the cover as a single page
        when: {
            turning: function(event, page) {
                if (page === 1) {
                    $('#flipbook').turn('display', 'single');  // Show the cover as a single centered square
                } else {
                    $('#flipbook').turn('display', 'double');  // Double-page spread for remaining pages
                }
            }
        }
    });
});
