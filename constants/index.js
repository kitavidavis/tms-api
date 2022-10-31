const ORIGIN = '*'
const PORT = process.env.PORT || 8080

// for "atlas" edit MONGO_URI in -> .env file || for "community server" edit <MyDatabase>
const MONGO_URI = process.env.MONGO_URI
const MONGO_OPTIONS = {}

const JWT_SECRET = process.env.JWT_SECRET || 'unsafe_secret'

const NODEMAILER_CONFIG= {"host": "smtp.gmail.com","port": "465","secure": "true","auth":{"user": "daviskitavi98@gmail.com", "pass": "fmzbotyygssqvwhy"}}

module.exports = {
  ORIGIN,
  PORT,
  MONGO_URI,
  MONGO_OPTIONS,
  JWT_SECRET,
  NODEMAILER_CONFIG
}
