import {mobileDB} from '../models/mobileDb'
import { Request, Response } from 'express'

export const mobileController = {

    createTable : async () => {
        mobileDB.createMobileTable()
    },

    addMobileEntry: async (req : Request, res : Response) => {
        console.log(req)
        res.json({res: req})
    }
}