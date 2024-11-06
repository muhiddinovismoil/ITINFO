import express from "express";
import mongoose, { connect } from "mongoose";
import { application, db } from "./src/config/index.js";
import {
    authorRoutes,
    authRoutes,
    categoryRoutes,
} from "./src/routes/index.js";

const app = express();
app.use(express.json());
try {
    connect(db.uri);
    mongoose.connection.on("connected", () => console.log("connected"));
} catch (error) {
    mongoose.connection.on("error", (err) => {
        console.error(err);
    });
}
app.use("/auth", authRoutes);
app.use("/category", categoryRoutes);
app.use("/authors", authorRoutes);
app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(500).send("Something broke!");
});
if (application.node_env === "development") {
    console.log("DEVELOPMENT");
}
app.listen(application.port, () => {
    console.log(`server is running on port ${application.port}`);
});
