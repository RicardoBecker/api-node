const express = require("express");
const cors = require("cors");
const requireDir = require("require-dir");

//inicinando o app
const app = express();
app.use(express.json());
app.use(cors());

requireDir("./src/db");
requireDir("./src/models");

app.use("/api", require("./src/routes"));

app.listen(3000);
