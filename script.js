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
        when: {
            turning: function(event, page, view) {
                if (page === 1) {
                    // Adjust size for cover page if needed
                } else {
                    // Handle spread pages
                }
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
