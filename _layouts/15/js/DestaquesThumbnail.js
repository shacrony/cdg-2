$(document).ready(function () {
       
    // Veja tambem
    $('article.list-simulation div.container ul.list a').on('click', function (e) {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
            'event': 'click_see_also',
            'seeAlsoItem': $(this).attr('title').trim()
        });
    });

});