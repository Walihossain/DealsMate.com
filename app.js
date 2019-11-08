import createError from "http-errors";
import express, { json, urlencoded } from "express";
import { join } from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";
import connectDB from "./config/db";
import busboy from "connect-busboy";
import busboyBodyParser from "busboy-body-parser";

import indexRouter from "./routes/index";
import pingRouter from "./routes/ping";
import userRouter from "./routes/user";
import itemRouter from "./routes/item";
import notificationRouter from "./routes/notification";

import listRouter from "./routes/list";
import cronJob from "./cronjob/cron";
import uploadPicture from "./routes/uploadPicture";

const path = require("path");

var app = express();
connectDB();

app.use(busboy());
app.use(busboyBodyParser());

app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "client", "build")));
app.use(cors());

app.use("/", indexRouter);
app.use("/ping", pingRouter);
app.use("/user", userRouter);
app.use("/item", itemRouter);
app.use("/list", listRouter);
app.use("/notification", notificationRouter);
app.use("/uploadPicture", uploadPicture);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ error: err });
});

cronJob.startCronJob();

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

module.exports = app;
