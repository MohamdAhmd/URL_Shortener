const express = require("express");
const homeRoter = require("./routes/shortUrl.route");
const config = require("./config");

const app = express();
// set views
app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.urlencoded({ extended: false }));

app.use("/", homeRoter);
app.use("/shorturl", homeRoter);

app.use("/:shorturl", homeRoter);

app.listen(config.PORT || 3000, () => {
  console.log(`Server listening on port ${config.PORT}`);
});
