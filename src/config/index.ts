
const ENV:string = process.env.NODE_ENV || 'development'
const PORT:number = Number(process.env.SERVER_PORT) || 3001

// BAse config this can be chnages bsed on the env
const baseConfig = {
  ENV,
  PORT,
  corsConfig: {
    origin: "*",
    exposeHeaders: ["Authorization"],
    credentials: true,
    allowMethods: ["GET", "PUT", "POST", "DELETE"],
    allowHeaders: ["Authorization", "Content-Type"],
    keepHeadersOnError: true,
  },
  bodyParserConfig: {
    enableTypes: ["json"]
  }
}

export default baseConfig
