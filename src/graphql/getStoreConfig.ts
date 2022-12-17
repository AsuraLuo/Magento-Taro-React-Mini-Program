import { gql, DocumentNode } from "@apollo/client";

export const GET_STORE_CONFIG: DocumentNode = gql`
  query getStoreConfig {
    storeConfig {
      code
      copyright
      category_url_suffix
      cms_home_page
      locale
      logo_alt
      logo_height
      logo_width
      shortcut_icon: head_shortcut_icon
      product_url_suffix
      logo_src: header_logo_src
      secure_base_url
      secure_base_media_url
    }
    currency {
      code: base_currency_code
      symbol: base_currency_symbol
    }
  }
`;
