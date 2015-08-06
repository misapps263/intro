document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
	document.querySelector("#playMp3").addEventListener("touchend", playMP3, false);
};

function playMP3() {
    var mp3URL = getMediaURL("sounds/gosht6.mp3");
    var media = new Media(mp3URL, null, mediaError);
    media.play();
}

function getMediaURL(s) {
    if(device.platform.toLowerCase() === "android") return "/android_asset/www/" + s;
    return s;
}

function mediaError(e) {
    alert('Media Error');
    alert(JSON.stringify(e));
}
function play_sound(src){

var path = window.location.pathname;

    path = path.substr( path, path.length - 10 );

    absolutePath='file://' + path;

 

if (device.platform == 'Android'){

 src='/android_asset/'+src;

 }

var media = new Media(src,

            function onSuccess() {

                // release the media resource once finished playing

                media.release();

                                                               

            },

            function onError(e){

                console.log("error playing sound: " + JSON.stringify(e));

                                                               

            });

media.setVolume('1.0');

media.play();

}

 
