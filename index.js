
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

  socket.on('update_showrooms_toserver', (data) => {
    io.emit('update_showrooms_fromserver', data)
  })

  socket.on('create', (room) => {
    socket.join(room)
  })

  socket.on('join', (data) => {
    socket.join(data.roomId)
    io.in(data.roomId).emit('update_room', data.roomObject)
    io.emit('update_showrooms', data.roomObject)
  })

  socket.on('update_room', (data) => {
    io.in(data.roomId).emit('update_room', data.roomObject)
    io.emit('update_showrooms', data.roomObject)

  })

  socket.on('update_game', (data) => {
    io.in(data.roomId).emit('update_game', data.gameState)

  })

  socket.on("disconnect", () => {
    console.log("client disconnected")
  })
})


server.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`)
})
