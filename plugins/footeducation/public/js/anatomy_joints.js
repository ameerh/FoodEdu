/**
 * Created by macbookpro on 3/9/17.
 */
/**
 * Created by macbookpro on 3/8/17.
 */
$(document).ready(function() {

    //this is the initial setup of the application
    $('#anatomy-joints').fadeIn(1000);
    $('#anatomy-joints-feet > div > img').hide();
    $('#anatomy-joints-links li').hide();
    $('#anatomy-joints-info').hide();
    $('#anatomy-joints-buttons-small > a').hide();

    //this is what happens when a user clicks on a button on the first screen
    $('#anatomy-joints-buttons > a').click(function() {
        var view = $(this).attr('href');
        $('#anatomy-joints-buttons').hide();
        $('#anatomy-joints-info').show();
        $('#anatomy-joints-buttons-small > a').fadeIn();
        $(view).maphilight();
        $('#anatomy-joints-feet ' + view).fadeIn();
        return false;
    });

    //this is what happens when a user clicks on the small buttons on the bottom corner
    $('#anatomy-joints-buttons-small > a').click(function() {
        var view = $(this).attr('href');
        $('#anatomy-joints-feet > div > div').hide();
        $('#anatomy-joints-info').show();
        //$(' #anatomy-joints-links ul').hide();
        $(view).maphilight();
        $('#anatomy-joints-feet ' + view).fadeIn();
        return false;
    });

    //this is what happens when a user hovers over an anatomy part
    $(' #anatomy-joints-feet area').hover(function() {
        var location = $(this).attr('alt');
        //$('#anatomy-joints-links ul').hide();
        $(' #anatomy-joints-info').hide();
        $(' #anatomy-joints-links #' + location).fadeIn();
        return false;
    }, function() {
        $(' #anatomy-joints-links li').hide();
        $(' #anatomy-joints-info').show();
        return false;
    });

    //this is what happens when a user clicks on an anatomy part
    $(' #anatomy-joints-feet area').click(function(e) {
        var location = $(this).attr('alt');
        var link = $(' #anatomy-joints-links #' + location + ' > a').attr('href');
        window.open(link,
            'Continue_to_Application','width=1000,height=600');
        e.preventDefault();
        return false;
    });
});
