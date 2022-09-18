import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { AdminTemplate } from "templates/AdminTemplate/AdminTemplate";
import DashBoard from "pages/Admin/DashBoard/DashBoard";
import Films from "pages/Admin/Films/Films";
import ShowTime from "pages/Admin/ShowTime/ShowTime";
import Loading from "component/Loading/Loading";
import Addnew from "pages/Admin/Films/Addnew/Addnew";
import Edit from "pages/Admin/Films/Edit/Edit";

export const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={history}>
        {/* <Loading /> */}
        <Switch>
          <AdminTemplate path="/admin" exact Component={DashBoard} />
          <AdminTemplate path="/admin/films" exact Component={Films} />
          <AdminTemplate path="/admin/films/addnew" exact Component={Addnew} />
          <AdminTemplate path="/admin/films/edit/:id" exact Component={Edit} />
          <AdminTemplate path="/admin/films/showtime/:id" exact Component={ShowTime} />
          <AdminTemplate path="/admin/users" exact Component={DashBoard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
