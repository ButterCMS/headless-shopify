import { NgModule } from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import { ApolloLink } from 'apollo-link';

import { EnvironmentVariablesService } from '@src/app/core/environment-variables.service';

export function createApollo(
  httpLink: HttpLink,
  environmentVariablesService: EnvironmentVariablesService
): {
  link: ApolloLink;
  cache: InMemoryCache;
} {
  const uri = `${environmentVariablesService.storeUrl}/api/graphql.json`;
  const headers = setContext((operation, context) => ({
    headers: {
      'X-Shopify-Storefront-Access-Token':
        environmentVariablesService.storeFrontToken,
    },
  }));

  const link = ApolloLink.from([headers, httpLink.create({ uri })]);
  const cache = new InMemoryCache();

  return {
    link,
    cache,
  };
}

@NgModule({
  exports: [ApolloModule, HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink, EnvironmentVariablesService],
    },
  ],
})
export class GraphQLModule {}
