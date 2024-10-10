const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const express = require("express");
const app = express();
const { errorMiddleware } = require("./middleware/errorMiddleware");
const dbConnect = require("./connect/database");

dbConnect();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(errorMiddleware);
app.use(cors());

app.use("/api/tasks", require("./routes/taskRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
