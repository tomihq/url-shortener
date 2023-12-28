export const config = {
    isProd: process.env.NODE_ENV === 'production',
    defaultApiKey: process.env.DEFAULT_API_KEY as string,
  }