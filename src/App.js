import "./App.css";
import react from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Play from "./Play";
import Manage from "./Manage";
import Header from "./Header";

class App extends react.Component {
  state = {
    data: [
      { qus: "Who sings 'All the single ladies?'", ans: "Beyonce", id: 0 },
      { qus: "Who sings 'Imagine'?", ans: "John Lennon", id: 1 },
      { qus: "Who sings 'Back to Black'?", ans: "Amy Weinhouse", id: 2 },
      { qus: "Who sings 'Lose Yourself to Dance'?", ans: "Daft Punk", id: 3 },
      { qus: "Who sings 'Oops I Did it Again'", ans: "Britney Spears", id: 4 },
    ],
  };

  delete = (id) => {
    const newData = this.state.data.filter((item) => {
      return item.id !== id;
    });

    this.setState({ data: newData }, () => {
      console.log(this.state);
    });
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
              <Route
                exact
                path="/manage"
                render={(props) => (
                  <Manage
                    data={this.state.data}
                    {...props}
                    deleteFunc={this.delete}
                  />
                )}
              />
            </div>
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
