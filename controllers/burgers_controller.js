const express = require("express");

const router = express.Router();

// import models burger.js to use database functions
const burger = require("../models/burger");

//create all routes
router.get("/", (req, res) => {
    burger.selectAll((data) => {
        const bObject = {
            burgers: data,
        };
        console.log(bObject);
        res.render('index', bObject);
    });
});

router.post("/api/burgers", (req, res) => {
    burger.insertOne(['burgers', 'devoured'], [req.body.burgers, req.body.devoured], (result) => {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", (req, res) => {
    const condition = `id = ${req.params.id}`;

    console.log("condition", condition);

    burger.update(
        {
            devoured: req.body.devoured,
        },
        condition,
        (result) => {
            if (result.changedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});
// export routes for server.js to use
module.exports = router;