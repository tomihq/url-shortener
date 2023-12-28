import Joi from 'joi';

export const schemas = {
    createShortedUrl: Joi.object({
        url: Joi.string().required()
    })
}