import express from 'express';
import cors from "cors";
import { createServer, Server } from 'node:http';
import SocketIO from "socket.io";

import config from '../common/config';
import { RedisClientType } from './RedisServer';
import apiRouter from "../routes";
import { routeNotFound } from '../middlewares/route-not-found';

class ExpressServer {
    private _app!: express.Application;
    private _server!: Server;
    private _port!: number;

    constructor() {
        this.listen();
    }

    public listen(): void {
        // initialize express app
        this._app = express();

        this._app.use(express.json());
        this._app.use(express.urlencoded({ extended: false }));
        this._app.use(cors());
        this._app.use("/api", apiRouter);
        this._app.use("*", routeNotFound);

        this._port = config.PORT;
        this._server = createServer(this._app);
        this._server.listen(this._port, () => {
            console.log("Express Server running on port:", this._port);
        });
    }

    public close(): void {
        this._server.close((err) => {
            if (err) throw Error();

            console.info("Express Server stopped at", new Date());
        });
    }

    public initSocket(socket: SocketIO.Server): void {
        this._app.set('socket', socket);
    }

    public initRedis(redis: RedisClientType): void {
        this._app.set('redis', redis);
    }

    get server(): Server {
        return this._server;
    }
}

export default ExpressServer;
