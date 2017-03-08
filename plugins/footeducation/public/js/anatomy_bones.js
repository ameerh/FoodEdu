/**
 * Created by macbookpro on 3/8/17.
 */
$(document).ready(function() {

    //this is the initial setup of the application
    $('#anatomy-bones').fadeIn(1000);
    $('#anatomy-feet > div > img').hide();
    $('#anatomy-links li').hide();
    $('#anatomy-info').hide();
    $('#anatomy-buttons-small > a').hide();

    //this is what happens when a user clicks on a button on the first screen
    $('#anatomy-buttons > a').click(function() {
        var view = $(this).attr('href');
        $('#anatomy-buttons').hide();
        $('#anatomy-info').show();
        $('#anatomy-buttons-small > a').fadeIn();
        $(view).maphilight();
        $('#anatomy-feet ' + view).fadeIn();
        return false;
    });

    //this is what happens when a user clicks on the small buttons on the bottom corner
    $('#anatomy-buttons-small > a').click(function() {
        var view = $(this).attr('href');
        $('#anatomy-feet > div > div').hide();
        $('#anatomy-info').show();
        //$(' #anatomy-links ul').hide();
        $(view).maphilight();
        $('#anatomy-feet ' + view).fadeIn();
        return false;
    });

    //this is what happens when a user hovers over an anatomy part
    $(' #anatomy-feet area').hover(function() {
        var location = $(this).attr('alt');
        //$('#anatomy-links ul').hide();
        $(' #anatomy-info').hide();
        $(' #anatomy-links #' + location).fadeIn();
        return false;
    }, function() {
        $(' #anatomy-links li').hide();
        $(' #anatomy-info').show();
        return false;
    });

    //this is what happens when a user clicks on an anatomy part
    $(' #anatomy-feet area').click(function(e) {
        var location = $(this).attr('alt');
        var link = $(' #anatomy-links #' + location + ' > a').attr('href');
        window.open(link,
            'Continue_to_Application','width=1000,height=600');
        e.preventDefault();
        return false;
    });
});
