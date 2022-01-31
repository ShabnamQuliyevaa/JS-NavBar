$(function() {

    $('i').click(function() {

        $(this).toggleClass("fa-times");
        $('ul').animate({ height: 'toggle' }).toggleClass("active");








    });
});