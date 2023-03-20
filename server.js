const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const route = require("./routers");
const connectDB = require("./configs/DB")

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.json());


// Connect db
connectDB.connect();

app.use("/uploads", express.static("uploads"));
//  Route init
route(app);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("./client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 8000;
app.listen(PORT, console.log(`Server Run With Port ${PORT}`));
