import { getApps, withApps } from '@@/core/app'
import { IService } from '@@/core/services';
import type { NextApiRequest, NextApiResponse } from 'next'
import { app } from '@bootstrap/app';


const handler = async (
    req: NextApiRequest,
    res: NextApiResponse<any>
) => app.service(async () => {
    let services = app.loopDomains((domain) => domain.getService(req.query.service as string))
    .filter(service => service)
    .map((service: IService) =>  service(req.query));
    
    let results = await Promise.all(services);

    res.status(200).json({
        results,
    })
})()

export default handler
