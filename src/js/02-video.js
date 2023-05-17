import Player from '@vimeo/player';

const player = new Player('vimeo-player');
var throttle = require('lodash.throttle');

player.on('timeupdate', throttle(onTimeVideo, 1000));

function onTimeVideo(even) {
  const second = even.seconds;

  const currentTime = JSON.stringify(
    localStorage.setItem('videoplayer-current-time', second)
  );
  return currentTime;
}

const backTime = JSON.parse(
  localStorage.getItem('videoplayer-current-time', onTimeVideo)
);

player.setCurrentTime(backTime);
