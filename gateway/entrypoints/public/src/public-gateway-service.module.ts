import { GatewayModule }        from '@atls/nestjs-gateway'
import { GatewaySourceType }    from '@atls/nestjs-gateway'
import { Module }               from '@nestjs/common'
import { uploadGatewayHandler } from '@atls/services-proto-files'
import { filesGatewayHandler }  from '@atls/services-proto-files'

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
        {
          name: 'Files',
          type: GatewaySourceType.GRPC,
          handler: filesGatewayHandler,
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
                {
                  from: {
                    type: 'Query',
                    field: 'ListOwnedFiles',
                  },
                  to: {
                    type: 'Query',
                    field: 'files',
                  },
                },
              ],
            },
            filterSchema: {
              mode: 'bare',
              filters: ['Query.!ListPublicFiles'],
            },
          },
        },
      ],
    }),
  ],
})
export class PublicGatewayServiceModule {}
