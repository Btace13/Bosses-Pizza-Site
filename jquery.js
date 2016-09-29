$(document).on('click', 'a', function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);

});

$('body').scrollspy({

        target: ".navbar",
        offset: 50

    )
};
