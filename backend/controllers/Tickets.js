const express = require('express')
const router = express.Router()

const Ticket = require('../models/TicketModel')


router.get('/', (req, res, next) => {
    Ticket.find({})
        .then(tickets => res.json(tickets))
        .catch(next)
})

router.get('/:id', (req, res, next) => {
    Ticket.findById(req.params.id)
        .then((ticket) => res.json(ticket))
        .catch(next)
})

router.post('/', (req, res, next) => {
    Ticket.create(req.body)
        .then((ticket) => res.json(ticket))
        .catch(next)
})

router.put('/:id', (req, res, next) => {
    Ticket.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then((ticket) => res.json(ticket))
        .catch(next)
})

router.delete('/:id', (req, res, next) => {
    Ticket.findOneAndDelete({_id: req.params.id})
        .then((ticket) => res.json(ticket))
        .catch(next)
})

module.exports = router