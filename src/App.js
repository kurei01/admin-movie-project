import "./App.css";
import { createBrowserHistory } from "history";
import { Router, Routes } from "react-router-dom";
import { HomeTemplate } from "templates/HomeTemplate/HomeTemplate";
import Home from "pages/Home/Home";

export const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Routes>
          <HomeTemplate path="/" exact Component={Home} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;