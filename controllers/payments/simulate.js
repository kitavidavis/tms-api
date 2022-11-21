const Mpesa = require("mpesa-api").Mpesa;;
const { MPESA_SECURITY_CREDENTIAL } = require("../../constants");

const credentials = {
    clientKey: '83E7LAB71TOFWp38kHyA4mT0kbU8YYpq',
    clientSecret: '39wSSdt6OCz88eQP',
    initiatorPassword: MPESA_SECURITY_CREDENTIAL,
    certificatePath: null
}

const environment = "sandbox";

async function simulate(req, res){
    try{
        const obj = req.body;

        const mpesa = new Mpesa(credentials, environment);

        mpesa
        .c2bsimulate({
            ShortCode: 123456,
            Amount: 1 /* 1000 is an example amount */,
            Msisdn: obj.phone,
            CommandID: "Command ID" /* OPTIONAL */,
            BillRefNumber: "Bill Reference Number" /* OPTIONAL */,
        })
        .then((response) => {
          //Do something with the response
          //eg
          console.log(response);
          return res.status(200).send({data: response})
        })
        .catch((error) => {
          //Do something with the error;
          //eg
          console.error(error);
        });
    } catch(error){
        console.log(error);
    }
}

module.exports = simulate;