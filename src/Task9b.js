import React,{Component} from 'react';
    class GreetingClass extends Component{
        render(){
            return <h1> Hello,{this.props.name}! </h1>;
        }
    }
    function App(){
        return <GreetingClass name ="Bharath"/>
    }
export default App;