const House = require("../../models/properties");

async function create(req, res){
    try {
        const obj = req.body;

        House.getHouse(obj.name, function(err, house){
            if(err){
                throw err;
            }

            if(house){
                return res.status(400).send({message: "House by this name exists"});
            } 

            House.createHouse(new House(obj), function(err, house){
                if(err){
                    throw err;
                }

                return res.status(200).send({data: house});
            })
        })
    } catch(error){
        return res.status(500).send(error);
    }
}

module.exports = create;