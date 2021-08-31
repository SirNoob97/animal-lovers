import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './nav/Navbar';
import FormContainer from './form/Container';
import UserTable from './users/UserTable';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/create-user" exact component={FormContainer} />
        <Route
          path={['/users', '/users/:animal']}
          exact
          component={UserTable}
        />
      </Switch>
    </Router>
  );
}

export default App;
