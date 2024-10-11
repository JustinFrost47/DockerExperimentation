import { Request, Response } from "express";


const sampleController = {

    greet : (req : Request, res : Response) : void => {
        console.log("hello world")

        const response = {
            message: "Hello World",
            status: 200
        }

        res.status(200).json(response)
    }

}

export default  sampleController