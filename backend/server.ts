import express from "express";
import db from "./config/db";
import { ResultSetHeader } from "mysql2";


const app = express();

const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("Server is running");
});



app.get("/api/applications", (req, res) => {

    const sql = "SELECT * FROM applications"
    db.query(sql, (error, results) => {
        if (error) {
            return res.status(500).json({ error: "Database query failed" });
        }
        res.status(200).json(results);
    });
});

app.post("/api/applications", (req, res) => {

    const { company, role, status, dateApplied } = req.body;

    const sql = `
        INSERT INTO applications
        (company, role, status, dateApplied)
        VALUES (?, ?, ?, ?)
    `;

    db.query(sql,[company, role, status, dateApplied], (err, data) => {

            if (err) {
                console.log("Database error:", err);

                return res.status(500).json({
                    error: "Database query failed"
                });
            }

            const result = data as unknown as ResultSetHeader;

            res.status(201).json({
                message: "Application created successfully",
                id: result.insertId,
                company,
                role,
                status,
                dateApplied
            });
        }
    );
});

app.patch("/api/applications/:id", (req, res) => {

    const { id } = req.params;

    const { company, role, status, dateApplied } = req.body;

    const fields = [];
    const values = [];

    if (company !== undefined) {
        fields.push("company = ?");
        values.push(company);
    }

    if (role !== undefined) {
        fields.push("role = ?");
        values.push(role);
    }

    if (status !== undefined) {
        fields.push("status = ?");
        values.push(status);
    }

    if (dateApplied !== undefined) {
        fields.push("dateApplied = ?");
        values.push(dateApplied);
    }

    if (fields.length === 0) {
        return res.status(400).json({
            error: "No fields provided to update"
        });
    }

    const sql = `
        UPDATE applications
        SET ${fields.join(", ")}
        WHERE id = ?
    `;

    values.push(id);

    db.query(sql, values, (err, data) => {

        if (err) {
            console.log("Database error:", err);

            return res.status(500).json({
                error: "Database query failed"
            });
        }

        res.status(200).json({
            message: `Application ${id} updated successfully`
        });
    });
});



app.delete("/api/applications/:id", (req, res) => {

    const { id } = req.params;

    const sql = "DELETE FROM applications WHERE id = ?";

    db.query(sql, [id], (err, data) => {

        if (err) {
            console.log("Database error:", err);

            return res.status(500).json({
                error: "Database query failed"
            });
        }

        console.log("Delete result:", data);

        res.status(200).json({
            message: `Application ${id} deleted successfully`
        });
    });
});


app.listen(PORT, () => {
    console.log(`You are connected to server on PORT ${PORT}`);
});