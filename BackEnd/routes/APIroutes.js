const express = require('express')
const router = express.Router()


const {getVideo} = require("../controllers/APIcontrollers")

router.get("/getVideo",getVideo)

module.exports = router
