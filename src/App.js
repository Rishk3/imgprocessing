import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ImgProcessing from "./components/imgProcess/ImgProcessing";
import Upload from "./components/imgProcess/Upload";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path="/pro">
              <ImgProcessing />
            </Route>

            <Route path="/">
              <Upload />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
