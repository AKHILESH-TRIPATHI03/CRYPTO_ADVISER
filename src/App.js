import { Route, Switch } from "react-router-dom";
import CoinDoc from "./components/Pages/CoinDoc";
import CoinsInfo from "./components/Pages/CoinsInfo";
import CryptoNews from "./components/Pages/CryptoNews";
import { MainNavigation } from "./components/layout/MainNavigation";
function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <CoinDoc />
        </Route>
        <Route path="/coinsinfo">
          <CoinsInfo />
        </Route>
        <Route path="/cryptonews">
          <CryptoNews />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
