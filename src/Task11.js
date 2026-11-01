import React, { Component } from "react";

class App extends Component {
    constructor() {
        super();
        this.state = { count: 0, show: true };
        console.log("Constructor called");
    }

    componentDidMount() {
        console.log("Component Mounted");
    }

    componentDidUpdate() {
        console.log("Component Updated");
    }

    componentWillUnmount() {
        console.log("Component Unmounted");
    }

    render() {
        return (
            <div>
                {this.state.show && (
                    <div>
                        <h1>React Lifecycle</h1>
                        <h2>Count: {this.state.count}</h2>
                        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                            Increase
                        </button>
                    </div>
                )}

                <button onClick={() => this.setState({ show: false })}>
                    Remove Component
                </button>
            </div>
        );
    }
}

export default App;
