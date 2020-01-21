const express = require("express")
const router = express.Router()

router.get("/check", async function (req, res) {
        res.send("hello world")
    })

// router.get("/feed/:user", async function (req, res) {
//     const transactions = await Feed.find({}, function (err, transactions) {
//         res.send(feed)
//     })
// })


// router.post("/feed/:user", async function (req, res) {
//     const transaction = new Transaction(req.body)
//     await transaction.save()
//     res.send(transaction)
// })

// router.delete("/transaction", async function (req, res) {
//     let id = req.body.id
//     const transaction = await Transaction.findByIdAndDelete(id, function(err, success){
//         if (err){
//             console.log(err)
//         }
//     })
//     res.send(id)
// })

module.exports = router
