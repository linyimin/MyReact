import React from 'react';
import { func } from 'prop-types';
class Cat extends React.Component {
    render() {
      const mouse = this.props.mouse;
      return (
          <div>
                <h1>left:{mouse.x} top:{mouse.y}</h1>
                <img src="./img/logo.png" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
          </div>
        
      );
    }
  }
  
  class Mouse extends React.Component {
    constructor(props) {
      super(props);
      this.handleMouseMove = this.handleMouseMove.bind(this);
      this.state = { x: 0, y: 0 };
    }
  
    handleMouseMove(event) {
      this.setState({
        x: event.clientX,
        y: event.clientY
      });
    }

    render() {
      return (
        <div style={{ height: '100%'}} onMouseMove={this.handleMouseMove}>
  
          {/*
            Instead of providing a static representation of what <Mouse> renders,
            use the `render` prop to dynamically determine what to render.
          */}
          {this.props.render(this.state)}
        </div>
      );
    }
  }


  
  class MouseTracker extends React.Component {

    renderCat(mouse){
      return  <Cat mouse={mouse} />;
    }

    render() {
      return (
        <div>
          <h1>渲染属性复用组件的业务逻辑复用!</h1>
          <h1>Move the mouse around 渲染函数是一个箭头函数，每一次渲染都是新的函数，所以子组件必渲染</h1>
          <Mouse key="2" render={mouse => (
            <Cat mouse={mouse} />
          )}/>
          <h1>Move the mouse around  使用函数避免上面性能问题!</h1>
          <Mouse key="1" render={this.renderCat}/>
        </div>
      );
    }
  }

//   高阶组件：输入组件，输出新组件，新组件使用Mouse渲染组件，1：把自己属性原封不动传递给输入组件
//          2：把渲染组件调用渲染函数传递的参数，也传递给输入组件
  function HocCompMouse(Component){
      return class extends React.Component{
          render(){
              return(
                  <Mouse>
                      render={mouse=> <Component {...this.props} mouse={mouse}></Component>}
                  </Mouse>
                 
              );
          }
      }
  }

  export const MouseView = HocCompMouse(Cat);

  export default MouseTracker;