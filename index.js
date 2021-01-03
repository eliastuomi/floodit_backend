
const app = require('./app') // varsinainen Express-sovellus

const http = require('http')

const config = require('./utils/config')
const logger = require('./utils/logger')

const server = http.createServer(app)

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
})

io.on("connection", (socket) => {
  console.log("new client connected")

  // let id
  // let host

  socket.on('new_availableroom', (data) => {
    io.emit('new_availableroom', data)
  })

  socket.on('create', (room) => {
    socket.join(room)
    // id = room
    // host = true
  })

  socket.on('join', (data) => {
    socket.join(data.roomId)
    io.in(data.roomId).emit('update_room', data.roomObject)
    io.emit('updated_availableroom', data.roomObject)
    // id = data.roomId
    // host = false
  })

  socket.on('update_room', (data) => {
    io.in(data.roomId).emit('update_room', data.roomObject)
    io.emit('updated_availableroom', data.roomObject)
  })

  socket.on('game_over', (data) => {
    io.in(data.roomId).emit('game_over', data.text)
  })

  socket.on('send_message', (data) => {
    io.in(data.roomId).emit('send_message', data.chatObject)
  })

  socket.on('update_game', (data) => {
    io.in(data.roomId).emit('update_game', data.gameState)
  })

  socket.on('start_game', (data) => {
    io.in(data.roomId).emit('start_game', data.gameState)
  })

  socket.on('leave_host', (data) => {
    io.in(data.roomId).emit('leave_host')
    io.emit('remove_availableroom', data.roomId)
  })

  socket.on('leave_room', (data) => {
    io.in(data.roomId).emit('leave_room', data.roomObject)
  })

  socket.on("disconnect", () => {
    console.log("client disconnected")
    // id && io.in(id).emit('page_refresh')
    // id && host && io.emit('remove_availableroom', id)

  })
})


server.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`)
})
