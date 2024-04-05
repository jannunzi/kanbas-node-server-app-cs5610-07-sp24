// const express = require("express");
import express from "express";
import Hello from "./Hello.js";
import Calulator from "./Calculator.js";
import Assignments from "./Assignments.js";
// import Courses from "./Courses.js";
import CoursesRoutes from "./Courses/routes.js";
import ModuleRoutes from "./Modules/routes.js";
import cors from "cors";
import session from "express-session";
import SessionExercise from "./SessionExercise.js";
import UserRoutes from "./Users/routes.js";
import LikesRoutes from "./Napster/likes/routes.js";

import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/kanbas-sp24-thu");

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(
  session({
    secret: "my secret",
    resave: false,
    saveUninitialized: false,
  })
);

SessionExercise(app);
ModuleRoutes(app);
CoursesRoutes(app);
UserRoutes(app);
// Courses(app);
Assignments(app);
Calulator(app);
Hello(app);
LikesRoutes(app);

app.listen(4000);
