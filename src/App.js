import React from "react";
import { Route, BrowserRouter as Router, Switch  } from 'react-router-dom';

//import pages
import MainPage from "./pages/main";
import AdminPage from "./pages/admin";
import VerifyPage from "./pages/verify";
import StudentPage from "./pages/student";
import EmployerPage from "./pages/employer";
import SchoolPage from "./pages/school";
import StudentFormPage from "./pages/student-form";
import EmployerFormPage from "./pages/employer-form";
import SchoolFormPage from "./pages/school-form";

class App extends React.Component {
  render () {
    return (
      <Router>
        <Switch>
          {/* <Route path='/auth' component={AuthPage} /> */}
          <Route exact path='/' component={MainPage} />
          <Route exact path='/student' component={StudentPage} />
          <Route exact path='/admin' component={AdminPage} />
          <Route exact path='/employer' component={EmployerPage} />
          <Route exact path='/school' component={SchoolPage} />
          <Route exact path='/verify' component={VerifyPage} />
          <Route exact path='/student/form' component={StudentFormPage} />
          <Route exact path='/employer/form' component={EmployerFormPage} />
          <Route exact path='/school/form' component={SchoolFormPage} />

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