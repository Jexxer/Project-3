const mongoose = require("../db/connection");

const TicketSchema = new mongoose.Schema({
    title: String,
    dateCreated: {type: Date, default: Date.now},
    status: {type: String, required: true},
    creatorId: String,
    message: String
});

const Ticket = mongoose.model("Ticket", TicketSchema);

module.exports = Ticket;