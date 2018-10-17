import React from 'react';

class SearchResultList extends React.Component {
  constructor(props) {
    super(props);
    this.renderResultList = this.renderResultList.bind(this);
  }

  renderResultList(results) {
    return (
          <ul>
              { results.map((result, index) => {
                return (
                      <a href={ result.url } key = { index }><li> { result.title } </li></a>
                );
              })}
          </ul>
    );
  }

  render() {
    return (
        <section>
            <h2>Search Results:</h2>
            { this.renderResultList(this.props.searchResults) }
        </section>

    );
  }
}
export default SearchResultList;
