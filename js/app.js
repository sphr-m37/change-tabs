$(document).ready(function () {
    $(".list li").click(function () {
        $(this).addClass("bordered");
        $(this).siblings("li").removeClass("bordered");
        $(".descriptions .description").hide();
        $($(this).data("target")).show();
    });
});