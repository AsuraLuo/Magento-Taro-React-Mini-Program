import { Component, PropsWithChildren } from "react";
import { Provider } from "react-redux";

import { createStore } from "./store";

const store = createStore();

class App extends Component<PropsWithChildren> {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return <Provider store={store}>{this.props.children}</Provider>;
  }
}

export default App;
