import { NgModule } from '@angular/core'
import { ApolloClientOptions, InMemoryCache, split } from '@apollo/client/core'
import { WebSocketLink } from '@apollo/client/link/ws'
import { getMainDefinition } from '@apollo/client/utilities'
import { APOLLO_OPTIONS } from 'apollo-angular'
import { HttpLink } from 'apollo-angular/http'

import { environment } from '../environments/environment'

function httpToWs(path: string): string {
  return [
    // Replace 'http*' with 'ws*'
    location.protocol.replace('http', 'ws'),
    // Get the current hostname
    `//${location.hostname}`,
    // Get the current port
    `:${location.port}`,
    // Add the path
    path,
  ].join('')
}

export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  const http = httpLink.create({ uri: environment.graphql })
  const ws = new WebSocketLink({
    uri: httpToWs(environment.graphql),
    options: {
      reconnect: true,
    },
  })
  const link = split(
    ({ query }) => {
      const { kind, operation }: any = getMainDefinition(query)
      return kind === 'OperationDefinition' && operation === 'subscription'
    },
    ws,
    http,
  )
  return {
    link,
    cache: new InMemoryCache(),
  }
}

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class WebFeatureCoreGraphQLModule {}
