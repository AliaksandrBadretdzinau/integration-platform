import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { Report } from './entities'

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'postgres',
    port: 5432,
    username: 'username',
    password: 'password',
    database: 'db',
    synchronize: true,
    logging: false,
    entities: [Report],
    migrations: [],
    subscribers: [],
})
