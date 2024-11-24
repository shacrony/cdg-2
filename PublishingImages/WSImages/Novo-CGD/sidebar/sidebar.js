
var F6 = F6 || {};

F6.BarraLateral = function () {
    "use strict";

    return {
        init: function ( /*elem, data*/ ) {
                this.loadBarra();
                               },
              loadBarra:function(){

            var offset = $("#sidebar").offset();
            var topPadding = 200;
            $(window).scroll(function() {
                if ($(window).scrollTop() > offset.top) {
                    $("#sidebar").stop().animate({
                        marginTop: $(window).scrollTop() - offset.top + topPadding
                    });
                } else {
                    $("#sidebar").stop().animate({
                        marginTop: 0
                    });
                };
            });

      }
    };
};