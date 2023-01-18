import Register from "./components/Register";
import ipConfig from "./ipConfig.json";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Checkout from "./components/Checkout";
import Products from "./components/Products";
import Thanks from "./components/Thanks";
import theme from "./theme.js";
import { ThemeProvider } from "@mui/system";

export const config = {
  endpoint: `http://${ipConfig.workspaceIp}:8082/api/v1`,
};

function App() {
  return (
    <div className="App">
      {/* TODO: CRIO_TASK_MODULE_LOGIN - To add configure routes and their mapping */}
      <Switch>
        <Route exact path="/" component={Products} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/thanks" component={Thanks} />
      </Switch>
      {/* <Register /> */}
    </div>
  );
}

export default App;
