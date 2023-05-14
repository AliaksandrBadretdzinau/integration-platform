import { Request, Response, Router } from 'express'
import { ReportService } from '.'
import { validateRoute } from '../../middlewares'
import { schema } from './schema'

export const reportRouter = Router({ mergeParams: true })

// Only GET and POST handlers are located below
reportRouter.get('/', async (req: Request, res: Response) => {
   const reports = await ReportService.getReports()

   res.status(200).json(reports)
})

reportRouter.post(
    '/',
    validateRoute(schema),
    async (req: Request, res: Response) => {
        const { power, time } = req.body
        const report = await ReportService.createReport(power, time)

        res.status(201).json(report)
    }
)
