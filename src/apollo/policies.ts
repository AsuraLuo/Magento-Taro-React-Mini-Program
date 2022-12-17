type MergePolicies = {
  mergeObjects: any;
};

export const policies = {
  Query: {
    fields: {
      cart: {
        // Replaces @connection(key: "Cart")
        keyArgs: () => "Cart",
      },
      customerCart: {
        keyArgs: () => "Cart",
      },
      products: {
        merge(existing: any, incoming: any, { mergeObjects }: MergePolicies) {
          return mergeObjects(existing, incoming);
        },
      },
      company: {
        merge(existing: any, incoming: any, { mergeObjects }: MergePolicies) {
          return mergeObjects(existing, incoming);
        },
      },
      customer: {
        merge(existing: any, incoming: any, { mergeObjects }: MergePolicies) {
          return mergeObjects(existing, incoming);
        },
      },
      storeConfig: {
        merge(existing: any, incoming: any, { mergeObjects }: MergePolicies) {
          return mergeObjects(existing, incoming);
        },
      },
    },
  },
};
