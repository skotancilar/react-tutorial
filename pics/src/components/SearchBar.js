import React from 'react';

class Searchbar extends React.Component {
   state = { term: '' }

   render() {
      return (
         <div className="ui segment">
            <form className="ui form">
               <div className="field">
                  <label className="ui text-center" htmlFor="search">Image Search</label>
                  <input id="search" type="text" placeholder="Search..." value={this.state.term} onChange={e => this.setState({ term: e.target.value })} />
               </div>
            </form>
         </div>
      );
   }
}

export default Searchbar;