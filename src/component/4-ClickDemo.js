import React from 'react';

class Click extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        }
    }

    componentDidMount() {
        this.timerId = setInterval(() => this.updateTime(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }



    updateTime() {
        this.setState({
            date: new Date(),
        })
    }

    render() {
        return (
            <h2>{this.state.date.toLocaleTimeString()}</h2>
        );
    }
}

export default Click;