const User = require("../models/UserModel");
const userseeds = require("./seeds.json");

const Ticket = require("../models/TicketModel");
const ticketseeds = require("./ticketSeeds.json");

// User.deleteMany({})
//   .then(() => {
//     return User.insertMany(userseeds);
//   })
//   .then(console.log)
//   .catch(console.error);

Ticket.deleteMany({})
    .then(() => {
    return Ticket.insertMany(ticketseeds)
    })
    .then(console.log)
    .catch(console.error)

