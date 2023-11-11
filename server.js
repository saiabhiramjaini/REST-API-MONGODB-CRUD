const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
//middleware
app.use(express.json());

//routes
app.use("/api/v1/tasks",tasks);

// app.get("/api/v1/tasks")     - get all the tasks
// app.post("/api/v1/tasks")    - create a new task
// app.get("/api/v1/tasks/:id") - get a single task
// app.patch("/api/v1/tasks")   - update task
// app.delete("/api/v1/tasks")  - delete task

const start = async()=>{
    try{
        await connectDB(process.env.MONGO_URI)
    }
    catch(err){
        console.log(err);
    }
}

start(); //starting the db after server is connected

app.listen(process.env.PORT,console.log("server is running"));