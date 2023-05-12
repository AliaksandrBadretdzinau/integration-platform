import * as express from 'express'
import router from './router'

class ApplicationLoader {
    private _app: express.Application

    constructor() {
        this._app = express()
        this._app.disable('x-powered-by')
        this.middleware()
        this.routes()
    }

    public get app() {
        return this._app
    }

    private middleware() {
        this._app.use(express.json())
    }

    private routes() {
        this._app.use('/', router)
    }
}

export const webApp: express.Application = new ApplicationLoader().app
