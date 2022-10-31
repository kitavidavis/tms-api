const Unit = require("../../models/units");

async function create(req, res){
    try{
        const obj = req.body;

        Unit.createUnit(new Unit(obj), function(err, unit){
            if(err){
                throw err;
            }

            return res.status(200).send({data: unit});
        })
    } catch(error){
        return res.status(500).send(error);
    }
}

module.exports = create;