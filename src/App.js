import "./App.css";
import react from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Play from "./Play";
import Manage from "./Manage";
import Header from "./Header";

class App extends react.Component {
  state = {
    data: {
      0: { qus: "Who sings 'All the single ladies?'", ans: "Beyonce" },
      1: { qus: "Who sings 'Imagine'?", ans: "John Lennon" },
      2: { qus: "Who sings 'Back to Black'?", ans: "Amy Weinhouse" },
      3: { qus: "Who sings 'Lose Yourself to Dance'?", ans: "Daft Punk" },
      4: { qus: "Who sings 'Oops I Did it Again'", ans: "Britney Spears" },
    },
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <div>
              <Route exact path="/">
                <Play data={this.state.data} />
              </Route>

              <Route exact path="/manage">
                <Manage data={this.state.data} />
              </Route>
            </div>
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
