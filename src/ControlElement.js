import React, { Component } from 'react';
import AppItems from './AppItems';

var initialArray = [
    "Finish Redux tutorial",
    "Learn more about relay",
    "Build more 5 react apps",
    "Review React Component  LifeCycle",
    "Obtain data vitualization Certificate",
    "Review Algorithms",
    "Tweet Progress",
    "Get a coffee",
    "Browse Google Fonts",
    "Learn more about React Native"
];

class ControlElement extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            items: initialArray,
            newItem: '',
            search: ''
         }

         this.clear = this.clear.bind(this);
         this.reset = this.reset.bind(this);
         this.deleteItem = this.deleteItem.bind(this);
         this.searchQuery = this.searchQuery.bind(this);
         this.handleSearch = this.handleSearch.bind(this);
         this.handleChange = this.handleChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
    }

    clear() {
        this.setState({ items:[]});
    }

    reset() {
        this.setState({ items: initialArray });
    }

    deleteItem(number, event) {
        var cloneState = this.state.items.slice();
        cloneState.splice(number, 1); //ลบทีละ 1
        this.setState({ items: cloneState });
    }

    searchQuery(event) {
        this.setState({ search: event.target.value });
    }

    handleSearch(event) {
        event.preventDefault();
        var searchStr = this.state.search.trim().toLowerCase();
    }

    handleChange(event) {
        this.setState({ newItem: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        if(this.state.newItem.length > 0) {
            this.state.items.push(this.state.newItem);
            this.setState({ newItem: '' });
        }
    }

    render() { 
        return ( 
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        className="newTask"
                        type="text"
                        placeholder="Create new work item"
                        onChange={this.handleChange}
                        value={this.state.newItem}
                    />
                    <br />
                    <br />
                    <button className="enter">Enter New Item</button>
                </form>    
                <form onSubmit={this.handleSearch}>
                    <input 
                        className="search"
                        type="text"
                        placeholder="Fileter List"
                        onChange={this.searchQuery}
                        value={this.state.search}
                    />
                </form>
                <AppItems 
                    items={this.state.items}
                    search={this.state.search}
                    deleteItem={this.deleteItem}
                />
                <button className="clear" onClick={this.clear}>Clear the List</button>
                <button className="reset" onClick={this.reset}>Reset the List</button>

            </div>
         );
    }
}
 
export default ControlElement;