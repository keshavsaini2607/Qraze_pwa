import { BrowserRouter, Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ActiveOffers from "./pages/ActiveOffers";
import "./theme/global.css";
import ScanQrCode from "./pages/ScanQrCode";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <BrowserRouter>
      {/* <Route exact path="/" component={Home} /> */}
      <Route exact path="/" component={Login} />
      <Route exact path="/active-offers" component={ActiveOffers} />
      <Route exact path="/scan" component={ScanQrCode} />
    </BrowserRouter>
  </IonApp>
);

export default App;
