const express = require("express");

const studentRoute = express.Router();

studentRoute.route("/student")
    .get()
    .post()
    .delete()
    .patch();

module.exports = studentRoute;