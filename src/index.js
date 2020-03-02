import React, { Component, Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './tododemo/components/App';
import rootReducer from './tododemo/reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import './index.css';
import Hello from './component/1-FuncComponent';
import HelloMessage from './component/2-ClassHello';
import Game from './component/3-Game';
import PureRedux from './pure-redux/PureRedux';
import RouterSample from './router/RouterSample';
import RouterParams from './router/RouterParams';
import Click from './component/4-ClickDemo';
import HookComp from './component/6-Hook';
import ChatRecipientPicker from './component/7-UserHook';
// import HelloHOC from './component/5-Hoc';
const HelloHOC = React.lazy(() => import('./component/5-Hoc'));

const roteMap = {
  "pure-redux": PureRedux,
  "function-react": Hello,
  "class-react": HelloMessage,
  "Grame": Game,
  "SampleRouter": RouterSample,
  "RouterParam": RouterParams,
  "HOC": HelloHOC,
  "Hook": HookComp,
  "UserHook": ChatRecipientPicker,
  "Clock": Click
};

class AppTest extends Component {

  handleLinkClick = (key) => {
    // window.location.hash = `#${key}`;
    window.history.pushState(null, "", `/#/${key}`);
    this.forceUpdate();
  };

  render() {
    const currentKey = document.location.hash.replace(/#\/?/, "");
    let PageView = roteMap[currentKey] || Hello;

    return (
      <div className="main">
        <ul className="menu-list">
          {Object.keys(roteMap).map(key => (
            <li key={key} style={{ listStyle: "none" }}>
              <span className="link" onClick={() => this.handleLinkClick(key)}>{key}</span>
            </li>
          ))}
        </ul>

        <div style={{ padding: "100px 0" }}>
          {/* <PageView name="linyimin" /> */}
          <Suspense fallback={<div>Loading...</div>}>
            <PageView name="linyimin" />
          </Suspense>
        </div>
      </div>
    );
  }

}


const store = createStore(rootReducer)
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
//ReactDOM.render(<Click />, document.getElementById('root'));
ReactDOM.render(<AppTest />, document.getElementById('root1'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
