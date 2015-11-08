$(document).ready(function () {

    function getCurrentTime() {
        var player = document.getElementById("movie_player");
        var currentTime = player.getCurrentTime();
        return roundNumber(currentTime, 3);
    }

    console.log(getCurrentTime());

});

