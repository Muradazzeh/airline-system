# airline-system
## Introduction 
### Event-Driven Programming in Node.js
Event-Driven Programming is a logical pattern that we can choose to confine our programming within to avoid issues of complexity and collision. In this article we’re going to go over how Event-Driven Programming works and how we can make the best use of it in our Node.js projects

EventEmitter Node.js natively provides us with a useful module called EventEmitter that allows us to get started incorporating Event-Driven Programming in our project right away. Of course, creating our own version of EventEmitter wouldn’t be much of a challange, and in fact there are several modules published on npm such as EventEmitter2 and EventEmitter3 which promise a faster performance than the native EventEmitter.
````
const EventEmitter = require('events').EventEmitter;
const myEventEmitter = new EventEmitter;
````
### In this task we have to use the node Events as required below:

Lab Requirements
For each of the three system components:
 * The manager should:
    * Alert the pilot and the system when there is a new flight.
    * Be notified when a flight has arrived.
* The pilot should:
   * Alert the system when a flight took-off.
    * Alert the manager and the system when a flight has arrived.
    * Be notified when a new flight is scheduled.
* The system should:
    * Be notified when a new flight is scheduled.
    * Be notified when a flight took off.
    * Be notified when a flight has arrived.

### So lets start with UML class Diagram
![link](./image/Screenshot%20(314).png)

* first we start requiring the events class , and we used the singloton concepte , that require class in one page , and we called it every ware we want 
* then I started with the manger page so it is will take notification from system then we will print massage in the console and every ten second we will generat fake flight information and will emit it to the system 
> note that we used Faker to fake the flight details and this is how we requiered it 
```
npm install @faker-js/faker --save-dev

const {faker} = require('@faker-js/faker');
````
* the pilot will take notification about the new flight , the he will emit take off flight and arrived with time interval between them , with massage in the console 

* I got these result but extra take off notation 
![link](./image/Screenshot%20(315).png)
![link](./image/Screenshot%20(316).png)



