const express = require("express");
const path = require("path");

// const logger = require("./middleware/logger");

const app = express();

//Apply Middleware
//app.use(logger);

//Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

//set static folder
app.use(express.static(path.join(__dirname, "public")));

//members Api route
app.use("/api/members", require("./routes/api/members"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
