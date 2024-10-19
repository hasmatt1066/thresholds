$(document).ready(function() {
    // Initialize flipbook with adjusted width, height, and two-page spread (double display)
    $('#flipbook').turn({
        width: $(window).width() * 0.8, // 80% of the viewport width
        height: $(window).height() * 0.8, // 80% of the viewport height
        autoCenter: true, // Center the flipbook in the browser window
        gradients: true,
        elevation: 50,
        display: 'double', // Enable two-page spreads
        when: {
            turning: function(event, page, view) {
                console.log('Turning to page', page);
            },
            turned: function(event, page, view) {
                console.log('Turned to page', page);
            }
        }
    });

    // Resize flipbook dynamically when window size changes
    $(window).resize(function() {
        $('#flipbook').turn('size', $(window).width() * 0.8, $(window).height() * 0.8);
    });

    // Keyboard controls for navigation
    $(document).keydown(function(e) {
        if (e.key === "ArrowRight") {
            $('#flipbook').turn('next'); // Turn to the next page
        } else if (e.key === "ArrowLeft") {
            $('#flipbook').turn('previous'); // Turn to the previous page
        }
    });
});

