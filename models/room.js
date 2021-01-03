const mongoose = require('mongoose')

const roomSchema = new mongoose.Schema({
    roomName: String,
    users: Array,
    host: String,
    w: Number,
    h: Number,
    playerNumber: Number,
    colorNumber: Number
})

roomSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Room', roomSchema)