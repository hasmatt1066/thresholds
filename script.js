/* script.js */
$(document).ready(function() {
    // Debug message to confirm jQuery is loaded
    console.log('jQuery version:', $.fn.jquery);
    
    // Debug message to confirm turn.js is loaded
    if ($.fn.turn) {
        console.log('turn.js is loaded');
    } else {
        console.error('turn.js is not loaded!');
        return;
    }
    
    // Get the window dimensions
    const windowWidth = $(window).width();
    const windowHeight = $(window).height();
    
    // Calculate the book dimensions
    const coverSize = Math.min(windowHeight * 0.8, windowWidth * 0.4);
    
    try {
        // Initialize the flipbook with debugging
        const $flipbook = $('#flipbook');
        
        $flipbook.turn({
            width: coverSize * 2,
            height: coverSize,
            autoCenter: true,
            display: 'double',
            acceleration: true,
            gradients: true,
            elevation: 50,
            duration: 1000,
            when: {
                turning: function(event, page, pageObject) {
                    console.log('Turning to page:', page);
                },
                turned: function(event, page, pageObject) {
                    console.log('Turned to page:', page);
                },
                start: function(event, pageObject, corner) {
                    console.log('Starting turn from corner:', corner);
                }
            }
        });
        
        console.log('Flipbook initialized successfully');
        
        // Add keyboard navigation
        $(document).keydown(function(e) {
            switch(e.keyCode) {
                case 37: // left arrow
                    $flipbook.turn('previous');
                    break;
                case 39: // right arrow
                    $flipbook.turn('next');
                    break;
            }
        });
        
    } catch (error) {
        console.error('Error initializing flipbook:', error);
    }
    
    // Handle window resize
    $(window).resize(function() {
        const newWindowWidth = $(window).width();
        const newWindowHeight = $(window).height();
        const newCoverSize = Math.min(newWindowHeight * 0.8, newWindowWidth * 0.4);
        
        $('#flipbook').turn('size', newCoverSize * 2, newCoverSize);
    });
});
