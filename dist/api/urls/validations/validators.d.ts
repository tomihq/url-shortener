import { ContainerTypes, ValidatedRequestSchema } from 'express-joi-validation';
export interface CreateShortUrlSchema extends ValidatedRequestSchema {
    [ContainerTypes.Body]: {
        url: string;
    };
}
export interface AboutShortedUrlSchema extends ValidatedRequestSchema {
    [ContainerTypes.Params]: {
        url: string;
    };
}
