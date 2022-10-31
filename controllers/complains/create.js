const Complain = require("../../models/complains");

async function create(req, res){
    try {
        const obj = req.body;

        Complain.createComplain(new Complain(obj), function(err, complain){
            if(err){
                throw err;
            }

            return res.status(200).send({data: complain});
        })
    } catch(error){
        return res.status(500).send(error);
    }
}

module.exports = create;