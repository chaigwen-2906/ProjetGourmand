var player1;
var player2;
function onYouTubeIframeAPIReady() {
    player1 = new YT.Player('player1', {
        height: '143',
        width: '255',
        videoId: 'dwkJJ93Rrlg',
        events: {}
    });

    player2 = new YT.Player('player2', {
        height: '143',
        width: '255',
        videoId: 'Spf0BAD_vyI',
        events: {}
    });
    player3 = new YT.Player('player3', {
        height: '143',
        width: '255',
        videoId: '7snn7FZ9Zu0',
        events: {}
    });
    player4 = new YT.Player('player4', {
        height: '143',
        width: '255',
        videoId: 'D-kSBb2499g',
        events: {}
    });
}