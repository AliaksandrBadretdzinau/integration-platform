import { Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import { Report } from './model'

export default class ReportRepository {
    private static _client: Repository<Report>

    private constructor() {}
    
    public static get client(): Repository<Report> {
        if (!this._client) {
            this._client = AppDataSource.getRepository(Report)
        }

        return this._client
    }
}
