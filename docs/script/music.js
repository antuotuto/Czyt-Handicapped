$(function() {
    function loadMp3 (src) {
        $('<audio loop preload><source src="'+src+'" /></audio>').appendTo('body');//.on('canplaythrough', setMp3);
        setMp3();
    }

    function setMp3 () {
        document.addEventListener("WeixinJSBridgeReady", function () {
            WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
                $('audio')[0].play();
            });
        }, false);
        $('audio')[0].play();
        $('.music_btn').on('click', playOrPaused);
    }
    loadMp3("images/VariousArtists.mp3");

    function playOrPaused(){
//        $('.music_btn').removeClass('off');
//        setTimeout(function () {
//            $('.music_btn').addClass('off')
//        }, 0)
        var audio = $('audio')[0];
        var _this = $(this);
        if(audio.paused){
            _this.removeClass('off');
            audio.play();
            return;
        }
        _this.addClass('off');
        audio.pause();
    }
})