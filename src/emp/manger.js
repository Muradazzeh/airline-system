'use strict';
const events = require('../events');
const {faker} = require('@faker-js/faker');
events.on('new-flight', newFLight);
function newFLight(payload) {
     
        console.log(`Manager:new flight with ID ${payload.Flight.Details.flightID} have been scheduled`);
        console.log("-----------------------------------------")
}

setInterval(() => {
  let  Flight= {
        event: 'new-flight',
        time:faker.date.future () ,
        Details:{
        airLine: 'Al ETIHAD',
        flightID: faker.datatype.uuid(),
        pilot: faker.name.firstName() +" "+ faker.name.lastName() ,
        destination: faker.address.country(),
        status:faker.internet.emoji({ types: ['food', 'nature'] })

    }
} 
let payload = {Flight:Flight}
    events.emit('new-flight', payload);
   
}, 10000)
// events.on('new-flight', newArraive);
// function newArraive(payload) {
//     setInterval(() => {
      
//         console.log(`Manager: we’re greatly thankful for the amazing flight, ${payload.Flight.Details.pilot}`);
//         console.log("-----------------------------------------")
//       }, 10000)
    
// }