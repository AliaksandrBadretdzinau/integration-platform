import * as http from 'http'

import { AppDataSource } from './data-source'
import { webApp } from './app'

AppDataSource.initialize().then(async () => {
    const webApplication: http.Server = http.createServer(webApp)

    webApplication.on('error', (err) => console.error(err))
    webApplication.listen(process.env.PORT, async () => {
        console.log(`Listening on port ${process.env.PORT}...`)
    })

}).catch(error => console.log(error))
