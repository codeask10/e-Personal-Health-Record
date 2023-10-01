const express = require('express')
const cors = require('cors')
const mongoose= require('./db');

const port = 5001;

// configration
const app = express();

app.use(express.json());
// app.use(express.urlencoded());
app.use(cors());

mongoose();
//Defining Routes
app.use("/api/user", require("./routes/auth"));
app.use("/api/home", require("./routes/home"));
app.use("/api/prescription", require("./routes/prescription"));
app.use("/api/CBC", require("./routes/cbc"));
app.use("/api/Urine",require("./routes/urine"));
app.use("/api/liverTest",require("./routes/liverFunction"));
app.use("/api/otherTest",require("./routes/otherTest"));
app.use("/api/userprofile",require("./routes/profile"));



app.listen(port, () => {
    console.log(`ePHR  backend  listening on port http://localhost:${port}`)
  })






