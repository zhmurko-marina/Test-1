$('document').ready(function() {
    var options = { videoId: 'DGIXT7ce3vQ', start: 3 };
    $('#wrapper').tubular(options);
});

$(function () {
    var austDay = new Date();
    austDay = new Date(austDay.getFullYear() + 1, 1 - 1, 26);
    $('#defaultCountdown').countdown({until: austDay});
    $('#year').text(austDay.getFullYear());
});