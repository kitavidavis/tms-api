require('dotenv').config() // Secures variables
const app = require('./utils/app') // Backend App (server)
const cors = require("cors");
const corsOptions ={
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}
app.use(cors(corsOptions));
const mongo = require('./utils/mongo') // MongoDB (database)
const {PORT} = require('./constants')
const authRoutes = require('./routes/auth')
const propertiesRoutes = require("./routes/properties");
const staff = require("./routes/staff");
const complains = require("./routes/complains");
const units = require("./routes/units");

async function bootstrap() {
  await mongo.connect()

  app.get('/', (req, res) => res.status(200).json({message: 'Hello World!'}))
  app.get('/healthz', (req, res) => res.status(200).send())
  app.use('/auth', authRoutes)
  app.use("/properties",propertiesRoutes)
  app.use("/staff", staff);
  app.use("/complains", complains);
  app.use("/units", units)
  app.listen(PORT, () => {
    console.log(`✅ Server is listening on port: ${PORT}`)
  })
}

bootstrap()
