import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { AdminTemplate } from "templates/AdminTemplate/AdminTemplate";
import Users from "pages/Admin/Users/Users";
import Films from "pages/Admin/Films/Films";
import ShowTime from "pages/Admin/Films/ShowTime/ShowTime";
import Addnew from "pages/Admin/Films/Addnew/Addnew";
import Edit from "pages/Admin/Films/Edit/Edit";
import AddUser from "pages/Admin/Users/AddUser/AddUser";
import EditUser from "pages/Admin/Users/EditUser/EditUser";

export const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <AdminTemplate path="/" exact Component={Films} />
          <AdminTemplate path="/films" exact Component={Films} />
          <AdminTemplate path="/films/addnew" exact Component={Addnew} />
          <AdminTemplate path="/films/edit/:id" exact Component={Edit} />
          <AdminTemplate
            path="/films/showtime/:id"
            exact
            Component={ShowTime}
          />
          <AdminTemplate path="/users" exact Component={Users} />
          <AdminTemplate path="/users/addnew" exact Component={AddUser} />
          <AdminTemplate path="/users/edit" exact Component={EditUser} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
