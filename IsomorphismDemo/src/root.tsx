import * as React from "react";
import * as ReactDOM from "react-dom";
import {AppContainer} from "react-hot-loader";
import {Provider} from "react-redux";

import {configureStore} from "./redux/store";
import TaskTemplate from "./components/TaskTemplate/TaskTemplate";

const store = configureStore();

const updateRender = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store} key="provider">
        <TaskTemplate />
      </Provider>
    </AppContainer>,
    document.getElementById("root"),
  );
};

updateRender();
if ((module as any).hot) {
  (module as any).hot.accept();
}