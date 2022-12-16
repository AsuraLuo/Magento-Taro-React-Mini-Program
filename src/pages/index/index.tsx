import { View, Navigator, Text, ViewProps } from "@tarojs/components";
import { AtButton } from "taro-ui";
import { styled } from "@linaria/react";
import { navigateTo } from "@tarojs/taro";

import "taro-ui/dist/style/components/button.scss"; // 按需引入

declare type Component<TProps> =
  | ((props: TProps) => any)
  | {
      new (props: TProps): any;
    };

type VPS = ViewProps & { style?: React.CSSProperties };
type TP = VPS & { color: string };
const Title = styled<TP, VPS, Component<TP>>(View)`
  color: ${(props) => props.color};
  background-color: royalblue;
`;

const Index = () => {
  const handleRedirect = () => {
    navigateTo({ url: "/pages/cart/index" });
  };

  return (
    <View className="index">
      <Title color="red">123</Title>
      <AtButton type="secondary" onClick={handleRedirect}>
        Cart
      </AtButton>
      <Navigator url="/pages/cart/index">跳转到新页面</Navigator>
    </View>
  );
};

export default Index;
