$(document).ready(function() {
    $('#flipbook').turn({
        width: 800,
        height: 600,
        autoCenter: true,
        gradients: true,
        elevation: 50,
    });

    // Keyboard controls
    $(document).keydown(function(e) {
        if (e.key === "ArrowRight") {
            $('#flipbook').turn('next');
        } else if (e.key === "ArrowLeft") {
            $('#flipbook').turn('previous');
        }
    });
});
