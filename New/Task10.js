import React, { Component } from "react";

class DateDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    render() {
        return (
            <div>
                <h1>Current Date</h1>
                <h2>{this.state.date.toString()}</h2>
            </div>
        );
    }
}

function App() {
    return <DateDisplay />;
}

export default App;