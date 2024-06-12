// YOUR_BASE_DIRECTORY/netlify/functions/api.ts
const express = require("express");
const serverless = require("serverless-http");
const router = express.Router();
const app = require("../index");
// app.use("/", router);

module.exports.handler = serverless(app);
