const express = require('express');
const pool = require('../../../database/db');
const router = express.Router();

// Get 
router.get('/get', async (req, res) => {
    try {
        const getHobbies = await pool.query("SELECT * FROM Hobbies");
        res.json(getHobbies.rows);
    } catch (error) {
        console.error(error.message)
    }
});

// Add 
router.post("/add", async (req, res) => {
    try {
        const {hobby} = req.body;
        const addHobby = await pool.query("INSERT INTO Hobbies (Hobby) VALUES ($1) RETURNING *",[hobby]);
        res.status(201).send();
    } catch (error) {
        console.error(error.message);
        res.send(error.message)
    }
});

// Delete
router.delete('/delete/:hobby', async (req, res) => {
    try {
        const {hobby} = req.params;
        const delHobby = await pool.query("DELETE FROM Hobbies WHERE hobby = $1",[hobby]);
        res.status(204).send();
    } catch (error) {
        console.error(error.message);
    }
});

module.exports = router;