const path = require("path");
const express = require("express");
const app = express();

const indexRouter = require("./routes/index");
const energisersRouter = require("./routes/energisers");
const participantsRouter = require("./routes/participants");
const sessionsRouter = require("./routes/sessions");

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/api/energisers", energisersRouter);
app.use("/api/participants", participantsRouter);
app.use("/api/sessions", sessionsRouter);

module.exports = app;
