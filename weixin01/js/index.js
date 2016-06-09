$(document).ready(function () {
    setTimeout(function () {
        $("#loading").css({"display":"none"}).siblings().animate({"opacity":"1"},1000);
        $("#music").css({"display":"block"});
        $("#audio")[0].play();
    },2000)
    var isPlay = true;
    document.getElementById("music").onclick = function () {
        if(isPlay){
            document.getElementById("audio").pause();
            isPlay = false;
        }else {
            document.getElementById("audio").play();
            isPlay = true;
        }

    }

})



