const Complain = require("../../models/complains");

async function getcomplain(req, res){
    try {
        const obj = req.body;

        Complain.getComplain(obj.id, function(err, complain){
            if(err){
                throw err;
            }

            return res.status(200).send({data: complain});
        })
    } catch(error){
        return res.status(500).send(error);
    }
}

module.exports = getcomplain;