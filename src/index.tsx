import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { AppContainer } from "react-hot-loader";
import { CounterPage } from "./app/containers";
import configureStore from "./app/store/configureStore";
import routes from "./app/store/routes";
import { INITIAL_STATE } from "./counter/reducers/rootCounterReducer";
import App from "./app/containers/app";

const initialStore = configureStore({
    counterRoot: INITIAL_STATE,
});
const rootEl = document.getElementById("root");
ReactDOM.render(
    <AppContainer>
      <Provider store={initialStore}>
        <App>
        </App>
      </Provider>
    </AppContainer>,
    rootEl
);

declare var module: any;
declare var require: any;
declare module "react-hot-loader";


// Hot Module Replacement API
if (module.hot) {
  const refreshCss = (cssName: string) => {
    const baseStyle = window.document.getElementById(`js-${cssName}-css`);
    if(baseStyle) {
        baseStyle.setAttribute('href', `/style/${cssName}.css?v=` + new Date().getTime())
    }
  }
  module.hot.accept("./app/containers/app", () => {
    refreshCss("main");
    const NextApp = require("./app/containers/app").default;
    ReactDOM.render(
      <AppContainer>
        <Provider store={initialStore}>
          <NextApp>
          </NextApp>
        </Provider>
      </AppContainer>
      ,
      rootEl
    );
  });
}
