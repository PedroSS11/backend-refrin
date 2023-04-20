import dotenv from "dotenv";

const dotenvapp = dotenv.config();

import express from "express";
import cors from "cors";

import sequelize from "./config/conn.js";

const app = express();
const port = process.env.PORT || 9001;

//models

//config para ler json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//config para o cors
app.use(cors());

// rotas
import router from "./routes/routes.js";
app.use(router);

sequelize
  //.sync({ force: true })
  .sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server rodadando na porta ${port}`);
    });
  })
  .catch((err) => console.log(err));
