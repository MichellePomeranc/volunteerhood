const express = require("express")
const router = express.Router()
const Sequelize = require('sequelize')
// const sequelize = new Sequelize('mysql://root:@localhost/volunteerhood')
const sequelize = new Sequelize('mysql://root:Aliahumus1@localhost/volunteerhood')

router.get("/check", async function (req, res) {
        res.send("hello world")
    })

router.get("/feed", async function (req, res) {
    let query =`SELECT * FROM help_requests`
    let result = await sequelize.query(query)
    res.send(result)
    })

router.post("/signup", async function (req, res) {
        let newUser = req.body
        console.log(newUser)
        let query = `INSERT INTO user VALUES(null, '${newUser.name}','${newUser.email}' ,
            '${newUser.password}', '${newUser.phone}', '${newUser.radius}', '${newUser.ranking}', '${newUser.counter}')`
            await sequelize.query(query)
            res.send('the request inserted')
    })


router.post("/addSkill", function (req, res) {
    let skills = req.body
    skills.skills.forEach(s =>  {
        let query = `INSERT INTO user_skills VALUES( '${skills.userID}', '${s}' )`
        sequelize.query(query)
    })
    res.end()
})

router.post("/feed", function (req, res) {
    let newHelp = req.body
    let query = `INSERT INTO help_requests VALUES(null, '${newHelp.userReq}',null ,
         'open', '${newHelp.description}', '${newHelp.skill}', '${newHelp.date}')`
    sequelize.query(query)
    res.send('the request inserted')
})

router.put("/feed/:id", function (req, res) {
   let id = req.params.id
   let helper = req.body.id
   console.log(id)
   let query = `UPDATE help_requests SET status = 'in process', userHelper = ${helper}`
   sequelize.query(query)
   res.end()
})

module.exports = router
