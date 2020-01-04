import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

//Rendenizando e colocando todo o conteudo de "App.js" na tag root do HTML
ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
