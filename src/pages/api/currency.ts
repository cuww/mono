// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Errors } from '@/config/errors';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    name: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const response = await fetch(`https://api.binance.com/api/v3/ticker/price?symbol=${req.query.symbol}`)
    const data = await response.json();

    if(data.code) {
        return res.status(500).json(
            Errors.InvalidCurrencyPair.throw(data)
        )
    }

    res.status(200).json(data)
}
