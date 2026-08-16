import express = require("express");

const app = express();

const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("Server is running");
});

app.get("/api/applications", (req, res) => {
    res.status(200).json({
        message: "This will return all applications from the database"
    });
});

app.post("/api/applications", (req, res) => {

    const { company, role, status, dateApplied } = req.body;

    res.status(201).json({
        company,
        role,
        status,
        dateApplied
    });
});

app.patch("/api/applications/:id", (req, res) => {

    const { id } = req.params;

    const { company, role, status, dateApplied } = req.body;

    res.json({
        message: `Application ${id} updated`,
        company,
        role,
        status,
        dateApplied
    });
});

app.delete("/api/applications/:id", (req, res) => {

    const { id } = req.params;

    res.json({
        message: `Application ${id} deleted`
    });
});

app.get("/api/applications/saved", (req, res) => {

    res.json({
        message: "Return saved applications"
    });
});

app.listen(PORT, () => {
    console.log(`You are connected to server on PORT ${PORT}`);
});