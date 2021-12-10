const express = require('express')
const projectRouter = require('./project/router')
const resourceRouter = require('./resource/router')
const taskRouter = require('./project/router')

const server = express()

server.use(express.json())

server.use('/api/projects', projectRouter)
server.use('/api/resource', resourceRouter)
server.use('/api/task', taskRouter)

server.use('*', (req,res)=>{
    res.status(404).json({
        message: "Can't find the information you selected"
    })
})

module.exports = server