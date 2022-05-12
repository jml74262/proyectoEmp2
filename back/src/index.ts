/* eslint-disable prettier/prettier */
import express from "express";
import { json } from "body-parser";

import "reflect-metadata"

const app = express();
const port = 3001;

app.use(json());

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
})