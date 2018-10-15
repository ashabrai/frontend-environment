import React from 'react';
import Header from '../header/header'
import faker from 'faker';
import cowsay from 'cowsay-browser';
//! Vinicio - in code, components are classes that extend from React.Component

class App extends React.Component {
    //! Vinicio - props are the main way of communication in REACT
    constructor(props) {
        super(props); // Initialize everything on React's side of the component
        this.state ={
            content: cowsay.say ({ text: faker.lorem.words(5) }),
        };
        this.handleTextChange = this.handleTextChange.bind(this)
    }

    handleTextChange = () => {
        this.setState(() => {
            return {
                content: cowsay.say({text: faker.lorem.words(5)}),
            };
        });
    };
    //! React components NEED to have one render function in every compontent
    render() {
        return (
            <div className='normal-class'>
                <Header/> {/* new Header().render();*/}
                <pre> { this.state.content} </pre>
                <button onClick ={this.handleTextChange}> Click me</button>
            </div>
        ); //! Vinicio - every return function will return JSX
    }
}

//! Vinicio - export default, means I'm only exporting ONE entity
export default App;
