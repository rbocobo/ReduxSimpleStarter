import React from 'react';

class SearchBar extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {term: ''};
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
    render(){ 
        return(
            <div>
            <input 
                className="search-bar"
                value={this.state.term}
                onChange={event=> this.onInputChange(event.target.value)}>
            </input>
            </div>
        )
    }

}

export default  SearchBar;