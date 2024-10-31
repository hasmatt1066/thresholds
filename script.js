/* script.js */
$(document).ready(function() {
    console.log('jQuery version:', $.fn.jquery);
    
    if ($.fn.turn) {
        console.log('turn.js is loaded');
    } else {
        console.error('turn.js is not loaded!');
        return;
    }
    
    const $flipbook = $('#flipbook');
    const cornerSize = 100; // Size of the corners
    const windowWidth = $(window).width();
    const windowHeight = $(window).height();
    const coverSize = Math.min(windowHeight * 0.8, windowWidth * 0.4);

    try {
        $flipbook.turn({
            width: coverSize * 2,
            height: coverSize,
            autoCenter: true,
            display: 'double',
            acceleration: true,
            gradients: true,
            elevation: 50,
            duration: 1000,
            turnCorners: "bl,br",  // Enable bottom left and bottom right corners for interaction
            cornerSize: cornerSize, // Set the size of the corners for easier clicking
            when: {
                turning: function(event, page, pageObject) {
                    console.log('Turning to page:', page);
                },
                turned: function(event, page, pageObject) {
                    console.log('Turned to page:', page);
                },
                start: function(event, pageObject, corner) {
                    console.log('Starting turn from corner:', corner);
                    // Trigger animation for the current corner
                    $(pageObject).css({
                        "transition": "transform 0.3s ease",
                        "transform": "rotateY(5deg)"  // Slight fold effect
                    });
                },
                end: function(event, pageObject, corner) {
                    // Reset page after fold animation ends
                    $(pageObject).css({
                        "transition": "transform 0.3s ease",
                        "transform": "rotateY(0deg)"
                    });
                }
            }
        });
        
        console.log('Flipbook initialized successfully');
        
        // Enable navigation by clicking on the left and right edges
        $flipbook.on("click", function(event) {
            const flipbookOffset = $flipbook.offset();
            const flipbookWidth = $flipbook.width();
            const clickPositionX = event.pageX - flipbookOffset.left;

            if (clickPositionX < flipbookWidth / 2) {
                $flipbook.turn("previous");
            } else {
                $flipbook.turn("next");
            }
        });

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

        // Handle mouse movement to trigger corner animations
        $(document).mousemove(function(event) {
            const flipbookOffset = $flipbook.offset();
            const mouseX = event.pageX - flipbookOffset.left;
            const mouseY = event.pageY - flipbookOffset.top;

            // Check proximity to corners and apply animations
            handleCornerProximity(mouseX, mouseY);
        });

        function handleCornerProximity(mouseX, mouseY) {
            const flipbookWidth = $flipbook.width();
            const flipbookHeight = $flipbook.height();

            // Check proximity to bottom-left corner
            if (mouseX < cornerSize && mouseY > (flipbookHeight - cornerSize)) {
                $flipbook.css("cursor", "pointer"); // Change cursor style
                $flipbook.turn("start", "bl");
            } else if (mouseX > cornerSize || mouseY < (flipbookHeight - cornerSize)) {
                $flipbook.turn("end", "bl");
            }

            // Check proximity to bottom-right corner
            if (mouseX > (flipbookWidth - cornerSize) && mouseY > (flipbookHeight - cornerSize)) {
                $flipbook.css("cursor", "pointer"); // Change cursor style
                $flipbook.turn("start", "br");
            } else if (mouseX < (flipbookWidth - cornerSize) || mouseY < (flipbookHeight - cornerSize)) {
                $flipbook.turn("end", "br");
            }
        }

    } catch (error) {
        console.error('Error initializing flipbook:', error);
    }
    
    // Handle window resize
    $(window).resize(function() {
        const newWindowWidth = $(window).width();
        const newWindowHeight = $(window).height();
        const newCoverSize = Math.min(newWindowHeight * 0.8, newWindowWidth * 0.4);
        
        $flipbook.turn('size', newCoverSize * 2, newCoverSize);
    });
});
