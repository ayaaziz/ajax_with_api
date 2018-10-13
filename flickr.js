$(document).ready(function() {
    $('li').click(function(event){
        $('li').removeClass('active');
        $(this).addClass('active');

        $.getJSON(
            'https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?',
            {
                tags: $(this).text(),
                format: 'json'
            },
            function(response) {
                var html = '<ul class="photo-list">';
                $.each(response.items,function(index,photo) {
                    html += '<li class="photo-category"><a href="'+photo.link+'"><img src="'+photo.media.m+'"></a></li>';
                });
                html += '</ul>';
                $('.content').html(html);
            }
        )
    });
});