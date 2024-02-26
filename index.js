import express from 'express'
import path from 'path'

const app = express()

app.use('/', express.static(path.resolve('./static')))
app.use('/', express.static(path.resolve('./.dist')))
app.listen(9000)
