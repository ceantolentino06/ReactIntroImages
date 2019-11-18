import React from "react";

class SearchBar extends React.Component {
   state = {
      term: ""
   };

   //    onFormSubmit(event) {
   //       event.preventDefault();
   //       console.log(this.state.term);
   //    }

   // TO FIX Cannot read property 'state' of undefined ISSUE:
   // 1ST SOLUTION USE ARROW FUNCTION HERE OR
   onFormSubmit = event => {
      event.preventDefault();

      this.props.onSubmit(this.state.term);
   };

   render() {
      return (
         <div className="ui segment">
            {/* TO FIX Cannot read property 'state' of undefined ISSUE:
                2ND SOLUTION IS TO USE ARROW FUNCTION HERE
            */}
            <form onSubmit={this.onFormSubmit} className="ui form">
               <div className="field">
                  <label>Image Search</label>
                  <input
                     type="text"
                     value={this.state.term}
                     onChange={e => this.setState({ term: e.target.value })}
                  />
               </div>
            </form>
         </div>
      );
   }
}

export default SearchBar;
