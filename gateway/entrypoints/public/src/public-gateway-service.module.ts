import { GatewayModule }        from '@atls/nestjs-gateway'
import { GatewaySourceType }    from '@atls/nestjs-gateway'
import { Module }               from '@nestjs/common'
import { uploadGatewayHandler } from '@atls/services-proto-upload'

@Module({
  imports: [
    GatewayModule.register({
      playground: {
        settings: {
          'request.credentials': 'include',
        },
      },
      transforms: {
        namingConvention: {
          fieldNames: 'camelCase',
        },
      },
      sources: [
        {
          name: 'Upload',
          type: GatewaySourceType.GRPC,
          handler: uploadGatewayHandler,
          transforms: {
            rename: {
              mode: 'bare',
              renames: [
                {
                  from: {
                    type: '(.*)RequestInput',
                  },
                  to: {
                    type: '$1Input',
                  },
                  useRegExpForTypes: true,
                },
              ],
            },
          },
        },
      ],
    }),
  ],
})
export class PublicGatewayServiceModule {}
