import React from 'react';

class ClickCounter extends React.Component {
    constructor() {
        super();
        this.state = {
            "counter": 0
        };

        //Bind the context in our function! This is not required if we use arrow functions!
        this.handleClick = this.handleClick.bind(this);
    }

    //If we use vanilia javascript  function syntax react will throw an error because
    //the button does not now what is the 'this' keyword! We can use arrow function styntax instead!
    // Or call the bind function in the constructur to bind the context
    handleClick(e) {
        //Our counter is increasing but our view does not change at all. 
        //We can fix that by calling the forceUpdate function.

        //BAD PRACTICE
        // this.forceUpdate();
        //We must use setState function instead!
        this.setState((state)=>{
            return {counter:state.counter+1};
        });
    }

    render() {
        return (
            <div className="click-counter">
                <button onClick={this.handleClick}>Click me!</button>
                <p>counter: {this.state.counter}</p>
            </div>
        );
    }
}

export default ClickCounter;