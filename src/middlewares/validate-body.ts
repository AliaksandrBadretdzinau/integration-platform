import * as Joi from 'joi'
import { NextFunction, Request, Response } from 'express'

export const validateRoute = (schema: Joi.ObjectSchema<any>, reqValidateField = 'body', options = {}) => {
    return async (req: Request, res: Response, next: NextFunction) => {
            const { error, value } = schema.validate(req[reqValidateField], options)

            if (error) {
                console.log(error.details)
                return res.status(400).json({ message: 'Invalid data' })
            }

            req['validData'] = (req['validData'] || []).push(value)

            return next()
    }
}
