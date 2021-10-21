import React from "react";
import { Route, BrowserRouter as Router, Switch  } from 'react-router-dom';

//import pages
// import AuthPage from "./pages/auth";
import StudentPage from "./pages/student";
import AdminPage from "./pages/admin";


class App extends React.Component {
  render () {
    return (
      <Router>
        <Switch>
          {/* <Route path='/auth' component={AuthPage} /> */}
          {/* <Route exact path='/' component={MainPage} /> */}
          <Route exact path='/student' component={StudentPage} />
          <Route exact path='/admin' component={AdminPage} />
          {/* <Route path='/main/case-list' component={ListCasePage} /> */}
          {/* <Route path='/main/disease-transfer' component={DiseaseTransferPage} /> */}
          {/* <Route path='/main/patient-appointment' component={PatientAppointmentPage} /> */}
          {/* <Route path='/main/other-apps' component={OtherAppsPage} /> */}
          {/* <Route path='/main/scheduled-transfer' component={ScheduledTransferPage} /> */}
          {/* <Route path='/main/system-instrution' component={SystemInstructionPage} /> */}
          {/* <Route path='/main/system-logout' component={SystemLogoutPage} /> */}
        </Switch>
      </Router>
    );
  }
}

export default App;