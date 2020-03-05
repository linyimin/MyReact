import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
//import { MemoryRouter } from "react-router";

const Home = (props) => {
  const { match } = props;
  return (
    <div>
      <Router>
        <div>
          <Link to={`${match.url}/test/Test1`} >Test1</Link><br></br>
          <Link to={`${match.url}/test/Test2`} >Test2</Link>
          <div>
            <Route path={`${match.url}/test/:subId`} component={ChildRoterView}></Route>
          </div>
        </div>

      </Router>
    </div>
  );
}
const Hello = () => <h1>Hello</h1>;
const About = () => <h1>About Us</h1>;
const ChildRoterView = ({ match }) => <h1>嵌套路由： {match.params.subId}</h1>;
export default class RouterSample extends React.PureComponent {
  render() {
    return (
      <Router>
        <div>
          <ul id="menu">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/hello">Hello</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>

          <div id="page-container">
            <Route path="/home" component={Home} />
            <Route path="/hello" component={Hello} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}
