const Complain = require("../../models/complains");

async function getcomplains(req, res){
    try {
        const obj = req.body;

        Complain.getComplains(obj.username, function(err, complains){
            if(err){
                throw err;
            }

            return res.status(200).send({data: complains});
        })
    } catch(error){
        return res.status(500).send(error);
    }
}

module.exports = getcomplains;