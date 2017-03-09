/**
 * Created by macbookpro on 3/9/17.
 */

$(document).ready(function() {

    //this is the initial setup of the application
    $('#anatomy-ligaments').fadeIn(1000);
    $('#anatomy-ligaments-feet > div > img').hide();
    $('#anatomy-ligaments-links li').hide();
    $('#anatomy-ligaments-info').hide();
    $('#anatomy-ligaments-buttons-small > a').hide();

    //this is what happens when a user clicks on a button on the first screen
    $('#anatomy-ligaments-buttons > a').click(function() {
        var view = $(this).attr('href');
        $('#anatomy-ligaments-buttons').hide();
        $('#anatomy-ligaments-info').show();
        $('#anatomy-ligaments-buttons-small > a').fadeIn();
        $(view).maphilight();
        $('#anatomy-ligaments-feet ' + view).fadeIn();
        return false;
    });

    //this is what happens when a user clicks on the small buttons on the bottom corner
    $('#anatomy-ligaments-buttons-small > a').click(function() {
        var view = $(this).attr('href');
        $('#anatomy-ligaments-feet > div > div').hide();
        $('#anatomy-ligaments-info').show();
        //$(' #anatomy-ligaments-links ul').hide();
        $(view).maphilight();
        $('#anatomy-ligaments-feet ' + view).fadeIn();
        return false;
    });

    //this is what happens when a user hovers over an anatomy part
    $(' #anatomy-ligaments-feet area').hover(function() {
        var location = $(this).attr('alt');
        //$('#anatomy-ligaments-links ul').hide();
        $(' #anatomy-ligaments-info').hide();
        $(' #anatomy-ligaments-links #' + location).fadeIn();
        return false;
    }, function() {
        $(' #anatomy-ligaments-links li').hide();
        $(' #anatomy-ligaments-info').show();
        return false;
    });

    //this is what happens when a user clicks on an anatomy part
    $(' #anatomy-ligaments-feet area').click(function(e) {
        var location = $(this).attr('alt');
        var link = $(' #anatomy-ligaments-links #' + location + ' > a').attr('href');
        window.open(link,
            'Continue_to_Application','width=1000,height=600');
        e.preventDefault();
        return false;
    });
});
