const User = require("../../models/users");
const {signToken} = require('../../middlewares/jsonwebtoken')

async function register(request, response, next) {

  try {
    const obj = request.body

    const newUser = new User({
      username: obj.username,
      password: obj.password,
      phonenumber: obj.phonenumber,
      role: obj.role
    });

    User.getUserByUsername(obj.username, function(err, user){
      if(err) throw err;

      if(user){
        return response.status(400).send({
          message: 'An account already exists with that "username"',
        })
      }

      User.createUser(newUser, function(err, user) {
        if(err) throw err;

        user.password = undefined;
        delete user.password;

        const token = signToken({uid: user._id, role: user.role});

        response.status(201).json({
          message: 'Succesfully registered',
          data: user,
          token,
        })
      })
    })
  } catch (error) {
    console.error(error)
    return response.status(500).send()
  }
}

module.exports = register
