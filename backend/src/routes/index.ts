import phoneRoutes from './phoneRoutes'
import { Express } from 'express'

export const initializeRoutes = (app : Express) => {
    app.use('/phone', phoneRoutes)


    app.use('*', (req, res) => {
        res.send("route not found")
    })
} 