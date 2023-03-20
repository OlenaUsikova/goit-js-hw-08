import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('#vimeo-player')

const player = new Vimeo.Player(iframe);

 player.on('timeupdate', function(ev) {
    console.log(ev)
    });
