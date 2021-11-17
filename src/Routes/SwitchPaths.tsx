import React, { useState, useEffect, useContext } from "react";
import userEntiteIDContext from "../context/AppContext";

// import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
// import { Route, useLocation } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../../src/components/auth/SignIn";
import HomePage from "../pages/adminUniversity";
// import Profil from "../pages/Profil";
// import Trending from "../pages/Trending";
// Route Reception
// import DashboardReception from "../pages/reception";

// Mainstock
// import DashboardMainStock from "../pages/stock";

// import NotFound from "../pages/NotFound";

// import {
//   PATH_RECEPTION as RECEPTION,
//   //
//   PATH_CONSULTATION as CONSULTATION,
// } from "./interfacePaths";
// import { FONCTIONALITIES as ROLE } from "../components/shared/constantes/fonctionalities";
//--------------
// import {
//   ROLE,
//   SUPER_ADMIN,
//   ADMIN_UNIV,
//   DECANAT_I,
//   DECANAT_II,
//   TEACHER,
//   CP_PROMOTION,
// } from "../constants/role";
// import Statistic from "../pages/adminUniversity/Statistic";

function SwitchPath() {
  const fonction = "SUPER_ADMIN";

  // const { fonction } = useContext(userEntiteIDContext);
  const [RoutesSelectedFromRoleUser, setRoutes] = useState<any>("");
  useEffect(() => {
    setRoutes(SelectRoutes());
  }, [fonction]);

  const SelectRoutes = () => {
    let route = "";
    if (route === "") {
      switch (fonction) {
        // case ROLE.SUPER_ADMIN:
        case "SUPER_ADMIN":
          return <RoutesReception />;
        // case ROLE.ADMIN_UNIV:
        //   return <RouteConsultation dataPaths={CONSULTATION} />;
        // case ROLE.DECANAT_I:
        //   return <RouteLaboratoire dataPaths={LABORATOIRE} />;
        // case ROLE.DECANAT_II:
        //   return <RouteCaisseRecette dataPaths={CAISSE_RECETTE} />;
        // case ROLE.TEACHER:
        //   return <RouteCaisseCentrale dataPaths={CAISSE_CENTRALE} />;
        // case ROLE.CP_PROMOTION:
        //   return <RouteMainStock dataPaths={MAINSTOCK} />;
        default:
          return console.log("default");
      }
    } else return <div> {route} </div>;
  };

  const location = useLocation();
  // <Switch location={location} key={location.pathname}>

  return <Router>{RoutesSelectedFromRoleUser}</Router>;
}

export default SwitchPath;

const RoutesReception = ({ dataPaths }: any) => {
  return (
    <>
      <Route path="/" component={Home} />
      {/* <Route path="/home" exact component={HomePage} /> */}

      {/* <Route path="/login" exact component={Login} /> */}
      {/* <Route path="/statistic" exact component={Statistic} /> */}
      {/* <Route path={dataPaths.patients} exact component={Patients} /> */}

      <CommunRoutes />
    </>
  );
};
const RoutesDecanat = ({ dataPaths }: any) => {
  return (
    <>
      {/* <Route path="/" exact component={Home} /> */}
      {/* <Route path="/home" exact component={HomePage} /> */}

      {/* <Route path="/login" exact component={Login} /> */}
      {/* <Route path={dataPaths.patients} exact component={Patients} /> */}

      {/* <CommunRoutes /> */}
    </>
  );
};

const CommunRoutes = ({ dataPaths }: any) => {
  return (
    <div>
      <Route path="/dashboard/clientss" exact component={Home} />
      {/* <Route component={NotFound} /> */}
    </div>
  );
};
