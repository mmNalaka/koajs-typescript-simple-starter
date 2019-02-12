import Koa from "Koa"
import logger from 'koa-logger'
import responseTime from 'koa-response-time'
import helmet from 'koa-helmet'
import cors from 'kcors'
import bodyParser from 'koa-bodyparser'

import config from "./config"

const app = new Koa()

app.use(responseTime())
app.use(logger())
app.use(helmet())
app.use(cors(config.corsConfig))
app.use(bodyParser(config.bodyParserConfig))


app.use((ctx: Koa.Context) => {
  ctx.body = 'This from the koa ts app'
})

const startServer =  async () => {
  try {
      await app.listen(config.PORT, () => {
        console.log(`Server listing on port ${config.PORT}`)
      })
  } catch (error) {
    console.log(error)
  }
}

export default startServer
