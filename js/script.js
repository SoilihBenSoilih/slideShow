 $(function(){
      setInterval(function(){
         $(".slideshow ul").animate({marginLeft:-175},600,function(){
            $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
         })
      }, 1800);
   });