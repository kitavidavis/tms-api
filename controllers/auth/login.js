const User = require("../../models/users");
const {signToken} = require('../../middlewares/jsonwebtoken')

async function login(request, response, next) {

  try {
    const obj = request.body

    User.getUserByUsername(obj.username, function(err, user){
      if(err) throw err;
      
      if(user){
        User.comparePassword(obj.password, user.password, function(err, isMatch){
          if(err) throw err;

          if(isMatch){
            user.password = undefined;
            delete user.password;

            const token = signToken({uid: user._id, role: user.role});

            response.status(200).json({
              message: 'Succesfully logged-in',
              data: user,
              token,
            })
          } else {
            return response.status(400).json({
              message: 'Bad credentials',
            })
          }
        })
      } else {
        return response.status(400).json({
          message: 'Bad credentials',
        })
      }
    })
  } catch (error) {
    console.error(error)
    response.status(500).send()
  }
}

module.exports = login
