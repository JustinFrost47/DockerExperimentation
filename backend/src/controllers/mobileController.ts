import {mobileDB} from '../models/mobileDb'
import { Request, Response } from 'express'

export const mobileController = {

    createTable : async () => {
        mobileDB.createMobileTable()
    },

    addMobileEntry: async (req : Request, res : Response) => {
        
        try{
        const {name, stock, image, description} = req.body
        const phone =  await mobileDB.createMobileEntry(name, stock, image, description)
        res.status(200).json({data : phone})
        } catch(error) {
            res.status(500).json({data: error})
        }
    },

    getAllMobiles : async (req : Request, res : Response) => {

        try{
        const mobiles = await mobileDB.getAllMobiles()
        res.status(200).json({data: mobiles?.rows})
        } catch(error) {
            res.status(500).json({data: error})
        }
    },

    getMobileByID : async (req : Request, res : Response) => {

        const {id} = req.params

        try{
            const mobile = await mobileDB.getMobileById(id)
            if (mobile && mobile.rows.length > 0) {
                res.status(200).json({data: mobile.rows});  // Send the result back as JSON
              } else {
                res.status(404).json({ message: 'Mobile not found' });
              }
            } catch(error) {
                res.status(500).json({data: error})
            }

    },

    deleteMobileByID : async (req : Request, res : Response) => {
        const {id} = req.params

        try{
            const mobile = await mobileDB.deleteMobileById(id)
            res.status(200).json({data: mobile})
        } catch(error) {
                res.status(500).json({data: error})
        }

    },

    
    increaseStock : async (req : Request, res : Response) => {
        const {id} = req.params
        let {amount} = req.body

        if (typeof amount !== 'number') {
            res.status(400).json({ message: 'Amount must be a number' });
        }

        amount = Math.abs(amount);

        try{
            const updatedMobile = await mobileDB.updateStock(id, amount)
            res.status(200).json({data: updatedMobile})
            } catch(error) {
                res.status(500).json({data: error})
            }
    },

    decreaseStock : async (req : Request, res : Response) => {
        const {id} = req.params
        let {amount} = req.body
        
        if (typeof amount !== 'number') {
            res.status(400).json({ message: 'Amount must be a number' });
        }


        amount = Math.abs(amount);

        try{
            const updatedMobile = await mobileDB.updateStock(id, -amount)
            res.status(200).json({data: updatedMobile})
            } catch(error) {
                res.status(500).json({data: error})
            }
    },

}