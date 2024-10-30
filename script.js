/* script.js */
$(document).ready(function() {
    // Get the window dimensions
    const windowWidth = $(window).width();
    const windowHeight = $(window).height();
    
    // Calculate the book dimensions
    // Use square dimensions for the cover
    const coverSize = Math.min(windowHeight * 0.8, windowWidth * 0.4);
    
    // Set up the flipbook
    $('#flipbook').turn({
        width: coverSize * 2,
        height: coverSize,
        autoCenter: true,
        display: 'double',
        acceleration: true,
        gradients: true,
        elevation: 50,
        page: 1,
        when: {
            turning: function(event, page, view) {
                // Add 'even' class to pages on the right side
                $('.double-page').removeClass('even');
                $('.double-page').each(function() {
                    if ($(this).turn('page') % 2 === 0) {
                        $(this).addClass('even');
                    }
                });
            }
        }
    });
    
    // Handle window resize
    $(window).resize(function() {
        const newWindowWidth = $(window).width();
        const newWindowHeight = $(window).height();
        const newCoverSize = Math.min(newWindowHeight * 0.8, newWindowWidth * 0.4);
        
        $('#flipbook').turn('size', newCoverSize * 2, newCoverSize);
    });
});
