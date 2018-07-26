const express = require("express");
const path = require("path");
const port = process.env.PORT || 5000;
const app = express();

//set the static assets
app.use(express.static("client/public"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "public", "index.html"));
});

app.listen(port, () => {
  console.log(`Server started & listening to port ${port}`);
});
