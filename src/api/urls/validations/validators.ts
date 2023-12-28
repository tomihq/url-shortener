import { ContainerTypes, ValidatedRequestSchema } from 'express-joi-validation'

export interface CreateShortUrlSchema
  extends ValidatedRequestSchema {
  [ContainerTypes.Body]: {
    url: string;
  }
}


