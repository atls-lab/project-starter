import { NestLogger }                 from '@atls/nestjs-logger'
import { NestFactory }                from '@nestjs/core'

import { PublicGatewayServiceModule } from './public-gateway-service.module'

declare const module: any

const bootstrap = async () => {
  const app = await NestFactory.create(PublicGatewayServiceModule, {
    logger: new NestLogger(),
  })

  app.enableShutdownHooks()

  await app.listen(3000)

  if (module.hot) {
    module.hot.accept()
    module.hot.dispose(() => app.close())
  }
}

bootstrap()
