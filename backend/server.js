const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "RDS_ENDPOINT",
  user: "admin",
  password: "PASSWORD",
  database: "healthtracker"
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }

  console.log("Connected to MySQL");
});

app.post("/entry", (req, res) => {

  const {
    systolic,
    diastolic,
    sodium,
    notes
  } = req.body;

  const sql = `
    INSERT INTO entries
    (systolic, diastolic, sodium, notes)
    VALUES (?, ?, ?, ?)
  `;

  db.query(
    sql,
    [systolic, diastolic, sodium, notes],
    (err) => {

      if (err) {
        return res.status(500).json({
          error: err.message
        });
      }

      res.json({
        message: "Entry saved successfully"
      });
    }
  );
});

app.get("/entries", (req, res) => {

  db.query(
    "SELECT * FROM entries ORDER BY created_at DESC",
    (err, results) => {

      if (err) {
        return res.status(500).json({
          error: err.message
        });
      }

      res.json(results);
    }
  );
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
