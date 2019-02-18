import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "./store/provider/provider";
import {Main} from "./components/main/main";

const root = (
  <Provider>
    <Main/>
  </Provider>
);

ReactDOM.render(
  root,
  document.getElementById("root"),
);
