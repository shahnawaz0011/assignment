import './App.css';
import Navbar from './Components/navbar/Navbar';
import { BrowserRouter as Router,Switch , Route } from "react-router-dom";
import Courses from './Components/pages/courses/Courses';
import Discussion from './Components/pages/discussion/Discussion';
import Exams from './Components/pages/exams/Exams';
import CRM from './Components/pages/crm/CRM';
import Survey from './Components/pages/survey/Survey';
import Setting from './Components/pages/setting/Setting';
import DBoard from './Components/pages/dBoard/DBoard';
// import 'boxicons';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
        <Navbar/>
        <div className="other"> <Switch>
          <Route exact path="/"><DBoard/></Route>
          <Route path="/courses"><Courses/></Route>
          <Route path="/discussion"><Discussion/></Route>
          <Route path="/exams"><Exams/></Route>
          <Route path="/crm" ><CRM/></Route>
          <Route path="/survey"><Survey/></Route>
          <Route path="/setting"><Setting/></Route>          
        </Switch></div>
        </div>
       
      </Router>
    </div>
  );
}

export default App;
