import { RequestHandler } from 'express'
import { config } from '../utils/config'
export const corsMiddleware: RequestHandler = (req, res, next) => {
  const corsWhitelist = [
    'https://quicklinkr.vercel.app',
    'quicklinkr.vercel.app',
  ]

  const VERCEL_DOMAIN = 'quicklinkr.vercel.app'

  if (!config.isProd) {
    corsWhitelist.push('http://localhost:3000')
    corsWhitelist.push('http://localhost:4200')
    corsWhitelist.push('http://localhost:8000')
    corsWhitelist.push('http://localhost:8080')
    corsWhitelist.push('https://tomihq-markdown-blog-git-dev-tomihq.vercel.app/')
  }

  if (!req.headers.origin) {
    return next()
  }

  const isVercelDomain =
    req.headers.origin.indexOf(VERCEL_DOMAIN) > -1

  const isWhitelisted = corsWhitelist.some(el => req.headers.origin === el)

  // Whitelist the domain and allow CORS
  // If domain is in corsWhitelist or it's a known vercel domain
  if (isVercelDomain || isWhitelisted) {
    res.header('Access-Control-Allow-Origin', req.headers.origin)
    res.header(
      'Access-Control-Allow-Headers',
      'Authorization, api-key, token, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method',
    )
    res.header('Access-Control-Allow-Methods', '*')
  }

  next()
}