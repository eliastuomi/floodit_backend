const savesRouter = require('express').Router()
const Save = require('../models/save')
const User = require('../models/user')
const jwt = require('jsonwebtoken')

const getTokenFrom = request => {
    const authorization = request.get('authorization')
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
        return authorization.substring(7)
    }
    return null
}

savesRouter.post('/', async (request, response) => {
    const body = request.body

    const token = getTokenFrom(request)

    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!token || !decodedToken.id) {
        return response.status(401).json({ error: 'token missing or invalid' })
    }
    const user = await User.findById(decodedToken.id)

    const saveData = new Save({
        data: body.data,
        playerTurn: body.playerTurn,
        playerNumber: body.playerNumber,
        colorNumber: body.colorNumber,
        createdAt: new Date(),
        user: user._id


    })
    const savedData = await saveData.save()
    user.saves = user.saves.concat(savedData._id)
    await user.save()

    response.json(savedData.toJSON())

})

savesRouter.get('/', async (request, response) => {

    const token = getTokenFrom(request)
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!token || !decodedToken.id) {
        return response.status(401).json({ error: 'token missing or invalid' })
    }
    const user = await User.findById(decodedToken.id).populate('saves')
    const allSaveFiles = user.saves
    //const allSaveFiles = await Save.find({}).populate('user', { username: 1 })

    response.json(allSaveFiles.map(s => s.toJSON()))
})

savesRouter.get('/one', async (request, response) => {
    const loadFiles = await Save.find({})
    const mostRecent = loadFiles.reduce((acc, shot) => acc = acc.createdAt > shot.createdAt ? acc : shot, 0)
    response.json(mostRecent.toJSON())
})

savesRouter.get('/:id', async (request, response) => {
    const loadFile = await Save.findById(request.params.id)
    response.json(loadFile.toJSON())
})

module.exports = savesRouter
