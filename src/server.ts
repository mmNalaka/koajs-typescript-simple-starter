import Koa from "Koa"
import logger from 'koa-logger'

import config from "./config"

const app = new Koa()

app.use(logger())

app.use((ctx: Koa.Context) => {
  ctx.body = 'This from the koa ts app'
})

const startServer =  async () => {
  try {
      await app.listen(config.PORT, () => {
        console.log('Server listing on port 3000')
      })
  } catch (error) {
    console.log(error)
  }
}

startServer()
