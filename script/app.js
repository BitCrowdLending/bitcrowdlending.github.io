$(document).ready(function(){

    var jarallax = new Jarallax();

    $("#home").css("height", window.innerHeight - (window.innerHeight / 2) + 150 + "px");

    jarallax.addAnimation("#logo_img", [
          { progress : "0%",  marginTop : "0px", opacity: "1" }
        , { progress : "100%", marginTop : "550px", opacity : "-0.5" }
    ]);

    var point = function(element, ToClass) {
        var footerPoint = new Waypoint({
              element : element
            , handler : function(direction){

                element.fadeTo("fast", 1);
                if(typeof ToClass !== 'undefined')
                    element.addClass(ToClass);
            }
            , offset: '75%'
        });
    };

    point($("#about"));
    point($("#highlight--left"), "highlight--in");
    point($("#highlight--right"), "highlight--in");
    point($("#team--fade"));

    var scrollTo = function(to) {
        $.scrollTo(to, 1000, {easing:'easeInOutExpo',offset:0,'axis':'y'});
    };

    $("#scroll-about").click(function(){
        scrollTo("#about");
    });

    $("#scroll-back").click(function(){
        scrollTo("#home");
    });
});
