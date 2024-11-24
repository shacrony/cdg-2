var mod = function () {
    if (Modernizr.matchmedia && matchMedia('(max-width:1004px)').matches) {
        $('.center-block.blue-pale').each(function () {
            var $figure = $(this).find('figure');

            if ($figure != null)
            {
                var mobile = $figure.data('mobile');

                if (mobile != null) {
                    var $image = $(this).find('img');

                    if ($image != null) {
                        $image.attr('src', mobile);
                    }
                }
            }
        });

        $('.highlight-slider').each(function () {
            $(this).find('div.container').each(function () {
                var mobile = $(this).data('mobile');

                if (mobile != null) {
                    var $image = $(this).find('img');

                    if ($image != null)
                    {
                        $image.attr('src', mobile);
                    }
                }
            });
        });

        $('.highlight-slider2').each(function () {
            $(this).find('div.container').each(function () {
                var mobile = $(this).data('mobile');

                if (mobile != null) {
                    var $image = $(this).find('img');

                    if ($image != null) {
                        $image.attr('src', mobile);
                    }
                }
            });
        });
    }
    else {
        $('.center-block.blue-pale').each(function () {
            var $figure = $(this).find('figure');

            if ($figure != null) {
                var desktop = $figure.data('desktop');

                if (desktop != null) {
                    var $image = $(this).find('img');

                    if ($image != null) {
                        $image.attr('src', desktop);
                    }
                }
            }
        });

        $('.highlight-slider').each(function () {
            $(this).find('div.container').each(function () {
                var desktop = $(this).data('desktop');

                if (desktop != null) {
                    var $image = $(this).find('img');

                    if ($image != null) {
                        $image.attr('src', desktop);
                    }
                }
            });
        });

        $('.highlight-slider2').each(function () {
            $(this).find('div.container').each(function () {
                var desktop = $(this).data('desktop');

                if (desktop != null) {
                    var $image = $(this).find('img');

                    if ($image != null) {
                        $image.attr('src', desktop);
                    }
                }
            });
        });
    }
}

// Shortcut for $(document).ready()
$(function () {
    // Call on every window resize
    $(window).resize(mod);

    // Call once on initial load
    mod();

    $('.highlight-slider').each(function () {
        $(this).find('div.container').each(function () {
            var link = $(this).data('link');
            var target = $(this).data('target');
            

            if (link != null && link != "") {
                $(this).on('click', function (e) {
                    e.preventDefault();                                       

                    if (target != null && target == '_blank') {
                        window.open(link);
                    }
                    else {
                        window.location.href = link;
                    }
                });
            }
        });
    });

    $('.highlight-slider2').each(function () {
        $(this).find('div.container').each(function () {
            var link = $(this).data('link');
            var target = $(this).data('target');
            

            if (link != null && link != "") {
                $(this).on('click', function (e) {
                    e.preventDefault();                                      

                    if (target != null && target == '_blank') {
                        window.open(link);
                    }
                    else {
                        window.location.href = link;
                    }
                });
            }
        });
    });

    // banner dos cc
    $('div.highlight-slider img').on('click', function (e) {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
            'event': 'click_banner'
        });
    });

    // banner dos cc
    $('div.highlight-slider div.text h2.subtitle-banner').on('click', function (e) {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
            'event': 'click_banner'
        });
    });

    // banner dos cc
    $('div.highlight-slider div.text h2.lead').on('click', function (e) {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
            'event': 'click_banner'
        });
    });

    // banner dos cc
    $('div.highlight-slider div.text h2.subtitle-lead').on('click', function (e) {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
            'event': 'click_banner'
        });
    });




    // saber mais banner cc
    $('div.highlight-slider div.text a.link').on('click', function (e) {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
            'event': 'click_know_more'
        });
    });
});
