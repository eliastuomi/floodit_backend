const Room = require('../models/room')
const roomsRouter = require('express').Router()


roomsRouter.post('/', async (request, response) => {
    const body = request.body

    const roomData = new Room({
        roomName: body.userName.concat('_room'),
        users: [body.userName],
        host: body.userName,
        chatLog: []
    })
    const savedRoom = await roomData.save()
    response.json(savedRoom.toJSON())
})

roomsRouter.get('/', async (request, response) => {

    const allRooms = await Room.find({})

    response.json(allRooms.map(s => s.toJSON()))
})

roomsRouter.delete('/:id', async (request, response) => {

    const deletedRoom = await Room.findByIdAndRemove(request.params.id)

    response.json(deletedRoom)
})

roomsRouter.put('/:id', async (request, response) => {
    const body = request.body

    const room = {
        host: body.host,
        roomName: body.roomName,
        users: body.users,
        chatLog: body.chatLog
    }

    const joinedRoom = await Room.findByIdAndUpdate(request.params.id, room, { new: true })

    response.json(joinedRoom)
})

// roomsRouter.get('/:id', async (request, response) => {


//     const room = await Room.findById(request.params.id)

//     response.json(room)
// })


module.exports = roomsRouter

