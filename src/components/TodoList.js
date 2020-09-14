// WAS WORKING HERE https://www.kirupa.com/react/simple_todo_app_react.htm ON var newItem
import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "../css/TodoList.css";

class TodoList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
    }

    addItem(e) {
        // Get data from _inputElement
        if (this._inputElement.value !== "") {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });

            // Clear input
            this._inputElement.value = "";

        }

        console.log(this.state.items);

        // Block refresh page on submit
        e.preventDefault();

    }

    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        {/* Storing Reference in _inputElement */}
                        <input ref={(a) => this._inputElement = a}
                               placeholder="Nouvelle tâche">
                        </input>
                        <button type="submit">Ajouter</button>
                    </form>
                </div>
                <TodoItems entries={this.state.items}/>
            </div>
        )
    }
}

export default TodoList;
