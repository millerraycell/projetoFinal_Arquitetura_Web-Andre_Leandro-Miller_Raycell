import express from 'express'
import path from 'path'
import firebase from 'firebase'

import './database/connection'
import routes from './routes'

const firebaseConfig = {
    authDomain: `${process.env.PROJECT_ID}.firebaseapp.com`,
    apiKey: process.env.API_KEY,
    projectId: process.env.PROJECT_ID,
    appId: process.env.PROJECT_NUMBER
}

firebase.initializeApp(firebaseConfig)

const app = express()
app.use(express.json())
app.use('/uploads', express.static(path.join(__dirname, '..','uploads')))

app.use(routes)

app.listen(3333)