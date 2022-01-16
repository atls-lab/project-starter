import { createApp } from './app'

declare const module: any

const bootstrap = async () => {
  const app = await createApp()

  const server = app.listen(process.env.PORT || 3000)

  if (module.hot) {
    module.hot.accept()
    module.hot.dispose(() => server.close())
  }
}

bootstrap()
