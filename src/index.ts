import * as Koa from "Koa";

const app = new Koa()

app.use((ctx: Koa.Context) => {
  ctx.body = 'This from the koa ts app'
})

const startServer =  async () => {
  try {
      await app.listen(3000, () => {
        console.log('Server listing on port 3000')
      })
  } catch (error) {
    console.log(error)
  }
}

startServer()
