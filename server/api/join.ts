import { Request, Response } from 'express'

const join = (req: Request, res: Response):Response => {
    return (
        res.send(`${req.body}`)
    )
}

export default join