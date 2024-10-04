var express = require('express');
var router = express.Router();

// Define the GET endpoint for "/"
router.get("/", (req, res, next) => {
    res.status(200).json({ 
        status: "success",
        message:  "GET messages",
        data: {
            "messages": [
                {
                    "id": 1,
                    "user": "user1",
                    "message": "message1"
                },
                {
                    "id": 2,
                    "user": "user2",
                    "message": "message2"
                }
            ]
        }
    });
});

module.exports = router;

