const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const employees = require("./routes/employee");
const connectDB = require("./db/connect");
require("dotenv").config();

// Middleware
app.use(express.json());

// Routes
app.use("/api/v1/tasks", tasks);

// app.get("/api/v1/tasks")     - get all the tasks
// app.post("/api/v1/tasks")    - create a new task
// app.get("/api/v1/tasks/:id") - get a single task
// app.patch("/api/v1/tasks")   - update task
// app.delete("/api/v1/tasks")  - delete task

app.use("/api/v1/employees", employees);

const start = async () => {
    try {
        await connectDB("mongodb+srv://JSAIABHIRAM:TdzyXHDVHqvficxv@cluster0.cyv7cq1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("Connected to the database");
    } catch (err) {
        console.error(err);
    }
}

start(); // Start the server after the database is connected

app.listen(process.env.PORT, () => {
    console.log("Server is running");
});
