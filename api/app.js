import dotenv from "dotenv";

const dotenvapp = dotenv.config();

import express from "express";
import cors from "cors";

import { sequelize } from "../config/conn";

const app = express();
const port = process.env.PORT;

//models

//config para ler json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//config para o cors
app.use(cors());

// rotas
import router from "../routes/routes";
app.use(router);

app.get("/api", (req, res) => {
  res.send("Hello World!");
});

sequelize
  //.sync({ force: true })
  .sync()
  .then(() => {
    app.listen(port || 9001, () => {
      console.log(`Server rodadando na porta ${port}`);
    });
  })
  .catch((err) => console.log(err));
