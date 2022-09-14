import "./App.css";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { AdminTemplate } from "templates/AdminTemplate/AdminTemplate";
import DashBoard from "pages/Admin/DashBoard/DashBoard";
import Films from "pages/Admin/Films/Films";
import ShowTime from "pages/Admin/ShowTime/ShowTime";

export const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <AdminTemplate path="/admin" exact Component={DashBoard} />
          <AdminTemplate path="/admin/films" exact Component={Films} />
          <AdminTemplate path="/admin/users" exact Component={DashBoard} />
          <AdminTemplate path="/admin/showtimes" exact Component={ShowTime} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;