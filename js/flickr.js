$(document).ready(function () {

    //links the form submit event and prevents it from submitting by default
    $("form").submit(function (evt) {
        evt.preventDefault();

        //gets the value of the search box and saves it
        var search = $('#search').val();

        //variable to hold the FlickrAPI
        var FlickrApi = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
        var FlickrOptions = {
            tags : search,
            format : "json"
        };

        //call back function to handle the display of the search
        function displayingPhotos(data) {
            var PhotosHTML ='<ul>';
            $.each(data.items, function (i, photo) {
                PhotosHTML += '<li class="grid-25 tablet-grid-50>"';
                PhotosHTML += '<a href="' + photo.link + '" class="image">';
                PhotosHTML += '<img src="' +photo.media.m + '"/> </a> </li>';
            });
            PhotosHTML += '</ul>';

            //hooks up the search to the html to display
            $('#photos').html(PhotosHTML);
        }
        $.getJSON(FlickrApi, FlickrOptions, displayingPhotos)

            //fail function to handle any error
            .fail(function (Xhr) {
                $('#photos').html('<p> sorry! ' + Xhr.statusText + ' error.</p>');
            })

    });//end of submit event
});//end of ready