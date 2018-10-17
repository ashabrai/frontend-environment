import React from 'react';

// const apiUrl = 'http://www.reddit.com/r/';

class RedditSearchForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.state.redditForm = this.props.title || '';
        this.state.searchLimit = this.props.searchLimit || 5;
    };

    handleForumChange = event => {
        //! Vinicio - EVERY CHANGE IN THE VIEW IT'S TIED TO STATE
        this.setState({ redditForm: event.target.value});
    };

    handleLimitChange = event =>{
        this.setState({ searchLimit: event.target.value});
    };
    handleSubmit = event => {
        event.preventDefault();
        //! Vinicio - Here, I need to update state, based on my current state
        this.props.loadResultList(this.state.redditForm, this.state.searchlimit);
    };
    // redditForumSelect() {
    //     return superagent.get(`${apiUrl}${'cat'}.json?limit=${'1'}`)
    //         .then((response) =>{
    //             console.log(response.body);
    //             this.setState({
    //                 redditForumResult: response.body,
    //                 redditForumError: null,
    //             });
    //         })
    //         .catch(console.error);
    // }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name = "reddit-form"
                    placeholder ='Search for a Reddit Forum'
                    value= { this.state.redditForm }
                    onChange= { this.handleForumChange }
                />
                <input
                    type="number"
                    name ="search-limit"
                    placeholder='How many would you like to see?'
                    min='0'
                    max='100'
                    value={ this.state.searchLimit }
                    onChange={this.handleLimitChange}
                    />
                <button type="submit"> Click Here </button>
            </form>
        );
    }
}

export default RedditSearchForm;
