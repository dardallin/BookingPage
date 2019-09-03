$('.popup-gallery').each(function() { // the containers for all your galleries
    $(this).magnificPopup({
        delegate: 'a', // the selector for gallery item
        type: 'image',
        gallery: {
            enabled:true
        }
    });
});

$(".pin-wrapper").pin({
    // margin: {left: 10, right: 10}

});