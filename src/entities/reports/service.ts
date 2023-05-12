import { AppDataSource } from '../../data-source'
import { Report } from '.'

export class ReportService {
    public static createReport = async (power: number, time: number) => {
        const report = new Report()
        report.power = power
        report.time = time

        await AppDataSource.manager.save(report)
        console.log('Report has been saved. ReportID: ', report.id)

        return report
    }

    public static getReports = async () => {
        const reports = await AppDataSource.manager.find(Report)
        console.log('All reports from DB: ', reports)

        return reports
    }
}
