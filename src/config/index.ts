
const ENV:string = process.env.NODE_ENV || 'development'
const PORT:number = Number(process.env.SERVER_PORT) || 3000

// BAse config this can be chnages bsed on the env
const baseConfig = {
  ENV,
  PORT
}

export default baseConfig
