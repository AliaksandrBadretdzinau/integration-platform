import { Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import { Report } from './model'

export default class ReportRepository {
    private static instance: Repository<Report>
    
    public static getInstance(): Repository<Report> {
        if (!ReportRepository.instance) {
            ReportRepository.instance = AppDataSource.getRepository(Report)
        }

        return this.instance
    }
}
