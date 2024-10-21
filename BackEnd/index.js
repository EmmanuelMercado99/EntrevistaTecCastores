const express = require("express")

const app = express()
const APIroutes = require("./routes/APIroutes.js")


app.use("/youtube",APIroutes)
app.use(express.json());

app.listen(3000, () => {
  console.log(`Servidor corriendo en http://localhost:3000}`);
});