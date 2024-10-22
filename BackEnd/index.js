const express = require("express")

const app = express()
const APIroutes = require("./routes/APIroutes.js")



app.use("/youtube",APIroutes)
app.use(express.json());

app.listen(process.env.PORT||4000, () => {
  console.log(`Servidor corriendo en ${process.env.PORT}}`);
});