//scroll
$(function () {
    $(window).scroll(function () {
        var scrollPos = $(window).scrollTop();

        if (scrollPos > 1700) {
            // Disable the LinkButton
            $("#btn_user").css("display", "none");
            
            $("#lb1").css("color", "white");
            $("#lb2").css("color", "white");
            $("#lb3").css("color", "white");
            $("#lb4").css("color", "white");

            $("#mainLogoo").css("color", "#ae9ee5");

            $("#navblur").css("background-color", "rgba(0,0,0, 0.01)");

            
        } else {
            // Enable the LinkButton
            $("#btn_user").css("display", "block");
           

            $("#lb1").css("color", "black");
            $("#lb2").css("color", "black");
            $("#lb3").css("color", "black");
            $("#lb4").css("color", "black");

            $("#mainLogoo").css("color", "#425ad3");

            $("#navblur").css("background-color", "rgba(255,255,255, 0.60)");
        }

       

        
    })
})