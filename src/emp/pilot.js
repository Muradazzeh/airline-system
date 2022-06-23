`use strict`
const events = require('../events');
const {faker} = require('@faker-js/faker');
events.once('new-flight', newflight)
function newflight(payload){
   
setInterval(() => {

    payload.Flight.event='took-off';
  console.log(`Pilot: flight with ID ${payload.Flight.Details.flightID} took-off`)
      events.emit('took_off', payload);
      
  }, 4000)
setInterval(() => {
//     let  Flight= {
//           event: 'took_off',
//           time:faker.date.future () ,
//           Details:{
//           airLine: 'Al ETIHAD',
//           flightID: faker.datatype.uuid(),
//           pilot: faker.name.firstName() +" "+ faker.name.lastName() ,
//           destination: faker.address.country(),
//           status:faker.internet.emoji({ types: ['food', 'nature'] })
  
//       }

//   } 
//   let payload = {Flight:Flight}
    payload.Flight.event='arrived';
  console.log(`Pilot: flight with ID ${payload.Flight.Details.flightID} arrived`)
      events.emit('arrived', payload);
      
  console.log(`Manager: we’re greatly thankful for the amazing flight, ${payload.Flight.Details.pilot}`);
  console.log("-----------------------------------------")
  }, 7000)
 

}