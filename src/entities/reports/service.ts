import { Report } from '.'
import ReportRepository from './db'

export class ReportService {
    public static createReport = async (power: number, time: number) => {
        const report = new Report(power, time)
        await ReportRepository.client.save(report)
        
        console.log('Report has been saved. ReportID: ', report.id)

        return report
    }

    public static getReports = async () => {
        const reports = await ReportRepository.client.find()

        console.log('All reports from DB: ', reports)

        return reports
    }
}
