const AsyncHandler = require("express-async-handler");
const Users = require("../model/users");

const findAllUsers = AsyncHandler(async (req, res) => {
  const usersList = await Users.findAll();

  res.status(200).json({
    description: "Successsfully fetched users data!",
    data: usersList,
  });
});

const createUsers = AsyncHandler(async (req,res)=>{
    
    if(!req.body.username){
        res.status(400).json({
            description: "Bad request username must be filled!"
        })
    }
    if(!req.body.password){
        res.status(400).json({
            description: "Bad request password must be filled!"
        })
    }
    if(!req.body.email){
        res.status(400).json({
            description: "Bad request email must be filled!"
        })
    }

    const users_map = {
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    }

    const users = await Users.create(users_map)

    res.status(200).json({
        description: "Successfully saved user data!"
    })
})

const findtUsersById = AsyncHandler(async(req,res)=>{
    const user = await Users.findByPk(req.params.id)
    // console.log("user: ", user)
    res.status(200).json({
        description: `Successfully fetch by id: ${req.params.id} user data!`,
        data: user
    })
})

const updateUsers = AsyncHandler(async(req,res)=>{
    const user = await Users.update(req.body,{
        where: {id: req.params.id}
    })

    res.status(200).json({
        description: `Successfully updated user data!`,
    })
})

const removeUsers = AsyncHandler(async(req,res)=>{
    const user = await Users.destroy({
        where: {id: req.params.id}
    })
    res.status(200).json({
        description: `Successfully deleted user data!`,
    })
})


module.exports = { createUsers, findAllUsers, findtUsersById, updateUsers, removeUsers}