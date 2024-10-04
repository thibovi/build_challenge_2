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
                    id: 1,
                    user: "user1",
                    message: "message1"
                },
                {
                    id: 2,
                    user: "user2",
                    message: "message2"
                }
            ]
        }
    });
});
//geef één bericht terug op basis van de id
//je kan hier de array keys 0, 1, ... gebruiken of gewoon één bericht terugsturen naar keuze
//als een bericht niet gevonden kan worden kan je status code 404 teruggeven ipv 200

router.get("/:id", (req, res, next) => {
    res.status(200).json({ 
        status: "success",
        message:  "GET message",
        data: {
            "message": {
                id: 1,
            }
        }
    });
}
);

module.exports = router;
