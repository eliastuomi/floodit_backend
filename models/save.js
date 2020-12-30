const mongoose = require('mongoose')

const saveSchema = new mongoose.Schema({
    data: Array,
    playerTurn: Number,
    playerNumber: Number,
    colorNumber: Number,
    createdAt: Date,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }
})

saveSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('SaveData', saveSchema)
