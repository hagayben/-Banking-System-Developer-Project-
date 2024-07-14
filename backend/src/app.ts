import express from "express";
import accountRouter from "./routers/account";
import config from "config";
import { notFound } from "./middlewares/not-found";
import { errorHandler } from "./middlewares/error-handler";
import cors from "cors";

const server = express();
server.use(cors());
server.use(express.json());

server.use("/api/accountoperations/", accountRouter);

// special middleware for not found error
server.use(notFound);

// error middlewares
server.use(errorHandler);

export default server;
