'use strict';
const events = require('./src/events');
require('./src/emp/manger');
require('./src/emp/pilot');


events.on('new-flight', notifyFlight);
function notifyFlight(payload) {
   
    console.log("flight",payload.Flight)
}

events.on('took_off', notifyTookOff);
function notifyTookOff(payload) {
   
    console.log("flight",payload.Flight)
}
events.on('arrived', notifyArrived);
function notifyArrived(payload) {
   
    console.log("flight",payload.Flight)
}