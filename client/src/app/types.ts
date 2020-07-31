export interface Product {
  node: {
    id: string;
    title: string;
    description: string;
    handle: string;
    images: { edges: { node: { altText: string; transformedSrc: string } }[] };
    priceRange: PriceRange;
    variants: {
      edges: {
        node: {
          id: string;
          priceV2: Price;
        };
      }[];
    };
  };
}

export interface CollectionProducts {
  collectionByHandle: {
    products: {
      edges: Product[];
    };
  };
}

export interface Products {
  products: {
    edges: Product[];
  };
}

export interface ProductVariant {
  id: string;
  title: string;
  selectedOptions: {
    name: string;
    value: string;
  }[];
  priceV2: Price;
  image: {
    altText: string;
    transformedSrc: string;
  };
}

export interface ProductData {
  productByHandle: {
    id: string;
    title: string;
    description: string;
    descriptionHtml: string;
    tags: string[];
    handle: string;
    priceRange: PriceRange;
    images: {
      edges: {
        node: {
          altText: string;
          transformedSrc: string;
        };
      }[];
    };
    variants: {
      edges: {
        node: ProductVariant;
      }[];
    };
  };
}

export interface PromotionalPage {
  slug: string;
  name: string;
  page_type: string;
  fields: {
    seo: {
      title: string;
      meta_description: string;
    };
    hero: {
      headline: string;
      sub_headline: string;
      image: string;
      image_alt: string;
      cta_button_text: string;
      cta_button_link: string;
    };
    products: {
      headline: string;
      products_list: PromotionalProduct[];
    };
  };
}

export interface PromotionalProduct {
  title: string;
  image: string;
  image_alt: string;
  description: string;
  price: string;
}

export interface PriceRange {
  minVariantPrice: Price;
  maxVariantPrice: Price;
}

export interface CartItem {
  [productId: string]: {
    handle: string;
    title: string;
    product: ProductVariant;
    quantity: number;
  };
}

interface Price {
  amount: string;
  currencyCode: string;
}
