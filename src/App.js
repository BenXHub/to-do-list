import React, {Component} from "react";
import Todos from "./components/Todos";
import './App.css';

class App extends Component{
    state = {
        todos: [
            {
                id: 1,
                title: "Make a website that sending sms by using QR code scanner and generator with CRUD operation",
                completed: false
            },
            {
                id: 2,
                title: "Make a Nobela",
                completed: false
            },
            {
                id: 3,
                title: "Make a Library Management System",
                completed: false
            }
        ]
    }

    render() {
        return (
            <div className={App}>
                <Todos todos={this.state.todos}/>
            </div>
        );
    }
}

export default App;
