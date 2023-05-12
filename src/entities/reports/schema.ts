import * as Joi from 'joi'

export const schema = Joi.object({
    power: Joi.number().positive().required(),
    time: Joi.number().positive().required()
})
