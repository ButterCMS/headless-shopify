import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable } from 'rxjs';
import { ApolloQueryResult } from 'apollo-client';
import { FetchResult } from 'apollo-link';

import { CollectionProducts, ProductData, Products } from '@src/app/types';

@Injectable({
  providedIn: 'root',
})
export class ShopifyService {
  constructor(private apollo: Apollo) {}

  getShopData(): Observable<ApolloQueryResult<{ shop: { name: string } }>> {
    return this.apollo.query<{ shop: { name: string } }>({
      query: gql`
        {
          shop {
            name
          }
        }
      `,
    });
  }

  getProducts(
    collectionHandle: string
  ): Observable<ApolloQueryResult<CollectionProducts>> {
    return this.apollo.query<CollectionProducts>({
      query: gql`
      {
        collectionByHandle(handle: "${collectionHandle}") {
          products(first: 10) {
            edges {
              node {
                id
                title
                description
                handle
                images(first: 1) {
                  edges {
                    node {
                      altText
                      transformedSrc
                    }
                  }
                }
                priceRange {
                  minVariantPrice {
                    amount
                    currencyCode
                  }
                  maxVariantPrice {
                    amount
                    currencyCode
                  }
                }
                variants(first: 10) {
                  edges {
                    node {
                      id
                      priceV2 {
                        amount
                        currencyCode
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
    });
  }

  getAllProducts(amount: number = 10): Observable<ApolloQueryResult<Products>> {
    return this.apollo.query<Products>({
      query: gql`
        {
          products(first: ${amount}, sortKey: CREATED_AT, reverse: true) {
            edges {
              node {
                id
                title
                description
                handle
                images(first: 1) {
                  edges {
                    node {
                      altText
                      transformedSrc
                    }
                  }
                }
                priceRange {
                  minVariantPrice {
                    amount
                    currencyCode
                  }
                  maxVariantPrice {
                    amount
                    currencyCode
                  }
                }
                variants(first: 10) {
                  edges {
                    node {
                      id
                      priceV2 {
                        amount
                        currencyCode
                      }
                      image {
                        altText
                        transformedSrc
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `,
    });
  }

  getProduct(
    productHandle: string
  ): Observable<ApolloQueryResult<ProductData>> {
    return this.apollo.query<ProductData>({
      query: gql`
      {
        productByHandle(handle: "${productHandle}") {
          id
          title
          description
          descriptionHtml
          tags
          handle
          images(first: 1) {
            edges {
              node {
                altText
                transformedSrc
              }
            }
          }
          variants(first: 10) {
            edges {
              node {
                id
                title
                selectedOptions {
                  name
                  value
                }
                priceV2 {
                  amount
                  currencyCode
                }
                image {
                  altText
                  transformedSrc
                }
              }
            }
          }
        }
      }
      `,
    });
  }

  createCheckout(
    lineItems: {
      variantId: string;
      quantity: number;
    }[]
  ): Observable<
    FetchResult<
      {
        checkoutCreate: {
          checkout: { id: string; webUrl: string };
          checkoutUserErrors: {
            code: string;
            field: string;
            message: string;
          }[];
        };
      },
      Record<string, any>,
      Record<string, any>
    >
  > {
    const createCheckout = gql`
      mutation checkoutCreate($input: CheckoutCreateInput!) {
        checkoutCreate(input: $input) {
          checkout {
            id
            webUrl
          }
          checkoutUserErrors {
            code
            field
            message
          }
        }
      }
    `;
    return this.apollo.mutate({
      mutation: createCheckout,
      variables: {
        input: { lineItems },
      },
    });
  }

  createCustomer(customer: {
    email: string;
    password: string;
  }): Observable<
    FetchResult<unknown, Record<string, any>, Record<string, any>>
  > {
    const createCheckout = gql`
      mutation customerCreate($input: CustomerCreateInput!) {
        customerCreate(input: $input) {
          customer {
            id
          }
          customerUserErrors {
            code
            field
            message
          }
        }
      }
    `;
    return this.apollo.mutate({
      mutation: createCheckout,
      variables: {
        input: {
          email: customer.email,
          password: customer.password,
        },
      },
    });
  }
}
