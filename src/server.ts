import Koa from "Koa"
import logger from 'koa-logger'
import responseTime from 'koa-response-time'
import helmet from 'koa-helmet'
import cors from 'kcors'
import bodyParser from 'koa-bodyparser'
import requestId from 'koa-requestid'

import httpStatusCodes from 'http-status-codes'

import errorMw from './middleware/errors-middleware'

import config from "./config"

const app = new Koa()

app.use(requestId())
app.use(errorMw())
app.use(responseTime())
app.use(logger())
app.use(helmet())
app.use(cors(config.corsConfig))
app.use(bodyParser(config.bodyParserConfig))

app.use(async (ctx: Koa.Context, next) => {
  try {
    ctx.status = httpStatusCodes.OK
    ctx.body = 'This from the koa ts app'
    await next()
  } catch (err) {
   console.log(err)
  }
})

export default app
