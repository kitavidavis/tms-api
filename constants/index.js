const ORIGIN = '*'
const PORT = process.env.PORT || 8080

// for "atlas" edit MONGO_URI in -> .env file || for "community server" edit <MyDatabase>
const MONGO_URI = process.env.MONGO_URI
const MONGO_OPTIONS = {}

const JWT_SECRET = process.env.JWT_SECRET || 'unsafe_secret'

const NODEMAILER_CONFIG= {"host": "smtp.gmail.com","port": "465","secure": "true","auth":{"user": "daviskitavi98@gmail.com", "pass": "fmzbotyygssqvwhy"}}

const MPESA_SECURITY_CREDENTIAL = "PqX7+W8V0Q6J57DAte2nCxQi6bzP91awlHQcNHNhoostmFze8CR0oHk4Cg9zF9j/GA6P8/G+ZHyAbi2M/vFZbTRcK00i/cMD5AtEC8mSkLeDpBPBq3s7iEQkKhEKhkxcGbA0BfI6e/j8zobgUDU6V86r23d/g7MNiS3nOpa/ckM8O4Yr5KpDMGm1gIyUvgnHJC5bzYEgYZf2OiaL3gGMEVbhChrxU5wxtIYyup/P2r9USlSBydSFVXh2q5XKZgJp6Qx3knIQYzZNNhPLGAB0LDdUCHXz9mjM7BnIql80l2W4JoWSBegyoZWovpVwsT7yb5rd/s7t2wPkFn+rLnnRPg=="
module.exports = {
  ORIGIN,
  PORT,
  MONGO_URI,
  MONGO_OPTIONS,
  JWT_SECRET,
  NODEMAILER_CONFIG,
  MPESA_SECURITY_CREDENTIAL
}
