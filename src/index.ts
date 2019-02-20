import app from './server'
import config from './config'

const startServer =  async () => {
  try {
      await app.listen(config.PORT, () => {
        console.log(`Server listing on port ${config.PORT}`)
      })
  } catch (error) {
    console.log(error)
  }
}

startServer();
