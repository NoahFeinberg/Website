/*
    Creates the sliding of the different subject bars
 */
$('.subject').click(function(){
    $(this).nextUntil('tr.subject').slideToggle(130);
});

/*
    Starts the website with all the subjects compressed
 */
$('.subject').nextUntil('tr.subject').toggle(0);

/*
    Creates the selected color shading
 */
$('div.infoBar table tr').click(function(){
    $('div.infoBar table tr').removeClass('selected');
    $(this).addClass('selected');
});

