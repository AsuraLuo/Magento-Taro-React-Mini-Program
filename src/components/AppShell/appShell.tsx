import { useQuery } from "@apollo/client";
import { View } from "@tarojs/components";

import { GET_STORE_CONFIG } from "../../graphql/getStoreConfig";

const AppShell = ({ children }) => {
  const { data } = useQuery(GET_STORE_CONFIG);
  console.log(data);

  return <View>{children}</View>;
};

export default AppShell;
