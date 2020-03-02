import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

const Topic = ({ match }) => (
  <h1>Topic {match.params.idKey} tip: {match.params.tip}</h1>
);

export default class RouterParams extends React.PureComponent {
  render() {
    return (
      <Router>
        <div>
          <ul id="menu">
            <li>
              <Link to="/topic/1/aa">Topic 1</Link>
            </li>
            <li>
              <Link to="/topic/2/bb">Topic 2</Link>
            </li>
            <li>
              <Link to="/topic/3/cc">Topic 3</Link>
            </li>
          </ul>

         <div id="page-container">
            <Route path="/topic/:idKey/:tip" component={Topic} />
          </div> 
        </div>
      </Router>
    );
  }
}
