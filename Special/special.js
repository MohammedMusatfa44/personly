
$(document).ready(function(){

    $(".chos li").each(function(){

        $(this) .on("click",function(){
            $(this).addClass("active").siblings().removeClass("active");

            $(".card-img .img-all").hide()
            var show = $($(this).data("pro"))
            $(show).slideDown()



        })
    })  
          $(".card-img .img-all").on("click",function(){
                $($(this).data("in")).removeClass("d-none").animate({
                    opacity:1,
                },500);
            })
            $(".card-i .close").on("click",function()
            {
                $($(this).data("in")).animate({
                    opacity:0,
                },500).addClass("d-none");
            })

            $(".card-blog").on("click",function(){
                $($(this).data("blog")).removeClass("d-none").animate({
                    opacity:1,
                },500);
                $(".bgg").removeClass("d-none")
            })
            $(".more svg").on("click",function(){
                console.log("dd");
                $(".card-aa").removeClass("d-none").animate({
                    opacity:1,
                },500);
            })

            $(".close2").on("click",function()
            {

                $($(this).data("in")).animate({
                    opacity:0,
                },500).addClass("d-none");
                $(".bgg").addClass("d-none")
            })

            $(".nav .nav1 .icon-come").on("click",function(){
                $($(this).data("pro")).removeClass("d-none").animate({
                    opacity:1,
                },1000).siblings().addClass("d-none").animate({
                    opacity:0,
                },500);
            })
            $(".nav2 .nav1 .icon-come").on("click",function(){
                $(".nav2 .nav1 a").on("click", function(){
                    $(this).preventDefault();

                });
                $($(this).data("pro")).removeClass("d-none").animate({
                    opacity:1,
                },1000).siblings().addClass("d-none").animate({
                    opacity:0,
                },500);
            })

});