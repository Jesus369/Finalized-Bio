const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;
const app = express();

const mustacheExpress = require("mustache-express");

app.use("/contactme", express.static("contactme"));
app.use("/projectimgs", express.static("projectimgs"));
app.use("/strengthimages", express.static("strengthimages"));
app.use("/public", express.static("public"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "mustache");
app.engine("mustache", mustacheExpress());
app.get("/", (req, res) => res.render("pages/homepage"));
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
