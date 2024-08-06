const express = require("express");
const pgp = require("pg-promise")();

const app = express();
const db = pgp("postgres://postgres:example@localhost:5432/postgres");

const port = 3000;

app.get("/", (req, res) => {
    db.one("SELECT * FROM users LIMIT 1;")
        .then((data) => {
            console.log("DATA:", data);
        })
        .catch((error) => {
            console.log("ERROR: ", error);
        });
    res.send("Hello from express");
})

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
})
