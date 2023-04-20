import dotenv from "dotenv"

const dotenvapp = dotenv.config();

import express from "express"
import cors from "cors";

import conn from "../config/conn";

const app = express();
const port = process.env.PORT;

//models

//config para ler json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//config para o cors
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

// rotas
const router = require("../routes/routes");
app.use(router);



conn
  //.sync({ force: true })
  .sync()
  .then(() => {
    app.listen(port || 9001, () => {
      console.log(`Server rodadando na porta ${port}`);
    });
  })
  .catch((err) => console.log(err));
