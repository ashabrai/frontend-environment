import "@babel/polyfill";
import React from 'react';
import superagent from 'superagent';
import Header from '../header/header';
import RedditSearchForm from '../reddit-form/reddit-form';
import RedditList from '../reddit-list/reddit-list';

//! Vinicio - in code, components are classes that extend from React.Component
//! Vinicio - in code, components are classes that extend from React.Component

class App extends React.Component {
    //! Vinicio - props are the main way of communication in REACT
    constructor(props) {
        super(props); // Initialize everything on React's side of the component

        this.state = {};
        this.state.redditResults = [];

    }

    async componentDidMount(){
        await this.loadResultList();

        console.log('Reddit list loaded!');
    }

    loadResultList = async (redditForm, searchLimit) => {
        const REDDIT_API = `https://www.reddit.com/r/${redditForm}.json?limit=${searchLimit}`;
        return superagent.get(REDDIT_API)
            .then(response => {
                if (response.body.data) {
                    this.setState({redditResults: response.body.data.children});
                    console.log(this.state.redditResults);
                }
            })
            .catch(console.error);
    }

    render() {
        return (
            <main>
                <Header/> {/* new Header().render();*/}
                <RedditSearchForm
                    loadResultList = { this.loadResultList }
                />
                <ul>
                    {
                        this.state.redditResults.map((currentArticle, index) => {
                            <RedditList
                                    article={currentArticle}
                                    key={index}
                                />
                            })
                    }
                </ul>
            </main>
        ); //! Vinicio - every return function will return JSX
    }
}

export default App;
