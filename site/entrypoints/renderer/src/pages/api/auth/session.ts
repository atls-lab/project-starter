import type { NextApiRequest }  from 'next'
import type { NextApiResponse } from 'next'

import { Session }              from '@ory/kratos-client'
import { getKratosSession }     from '@atls/kratos-session'

const handler = async (req: NextApiRequest, res: NextApiResponse<Session | null>) => {
  res.status(200).json(await getKratosSession(req))
}

export default handler
