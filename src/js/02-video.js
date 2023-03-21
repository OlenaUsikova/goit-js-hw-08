import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(function (ev) {
    localStorage.setItem(
      'videoplayer-current-time',
      JSON.stringify(ev.seconds)
    );
  }, 1000)
);

let playedTime = JSON.parse(localStorage.getItem('videoplayer-current-time'));
console.log(playedTime);
player.setCurrentTime(playedTime);
