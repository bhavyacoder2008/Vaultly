import express from "express";
import pool from "../db/db.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM users"); 
        res.send(result.rows);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});



export default router;