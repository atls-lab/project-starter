import type { NextApiRequest }  from 'next'
import type { NextApiResponse } from 'next'
import { getKratosSession }     from '@atls/kratos-session'
import { Session }              from '@ory/kratos-client'

const handler = async (req: NextApiRequest, res: NextApiResponse<Session | null>) => {
  res.status(200).json(await getKratosSession(req))
}

export default handler
