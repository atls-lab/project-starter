import express from 'express'
import next    from 'next'
import path    from 'path'

export const createApp = async () => {
  const nextApp = next({
    dev: process.env.NODE_ENV !== 'production',
    dir: process.env.NODE_ENV !== 'production' ? path.join(__dirname, '../src') : __dirname,
  })

  const handle = nextApp.getRequestHandler()

  await nextApp.prepare()

  const app = express()

  app.get('*', (req, res) => handle(req, res))
  app.post('*', (req, res) => handle(req, res))

  return app
}
