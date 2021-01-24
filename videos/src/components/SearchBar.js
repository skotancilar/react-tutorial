import React from 'react';

class SearchBar extends React.Component {
   state = { term: '' };

   onInputChange = e => {
      this.setState({ term: e.target.value })
   }

   onFormSubmitFn = e => {
      e.preventDefault();

      this.props.onFormSubmitProp(this.state.term);
   }

   render() {
      return (
         <div className="search-bar ui segment">
            <form onSubmit={this.onFormSubmitFn} className="ui form">
               <div className="field">
                  <label> {this.props.title}</label>
                  <input type="text" value={this.state.term}
                     onChange={this.onInputChange} placeholder={this.props.placeholder} />
               </div>
            </form>
         </div>
      )
   }
}

export default SearchBar;