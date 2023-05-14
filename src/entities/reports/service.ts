import { Report } from '.'
import ReportRepository from './db'

export class ReportService {
    public static createReport = async (power: number, time: number) => {
        const report = new Report(power, time)
        const db = ReportRepository.getInstance()
        await db.save(report)
        
        console.log('Report has been saved. ReportID: ', report.id)

        return report
    }

    public static getReports = async () => {
        const db = ReportRepository.getInstance()
        const reports = await db.find()

        console.log('All reports from DB: ', reports)

        return reports
    }
}
