import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

// if you want to pass data from children to parent use
// a class base App component. data will be passed using props
class App extends React.Component {
   state = { images: [] };
   // use a function then use it as props
   // async onSearchSubmit(term) {
   //    const response = await axios.get(
   //       "https://api.unsplash.com/search/photos",
   //       {
   //          params: { query: term },
   //          headers: {
   //             Authorization:
   //                "Client-ID 6c09a79e4ff4474e9eb3bcf39ffcdd8dc6ee2cceb6b44c5afc734ac74beb2178"
   //          }
   //       }
   //    );
   //    this.setState({ images: response.data.results });
   // }
   onSearchSubmit = async term => {
      const response = await unsplash.get("/search/photos", {
         params: { query: term }
      });
      this.setState({ images: response.data.results });
   };

   render() {
      return (
         <div className="ui container" style={{ marginTop: "10px" }}>
            {/* you can name onSubmit anything you want */}
            <SearchBar onSubmit={this.onSearchSubmit} />
            <ImageList images={this.state.images} />
         </div>
      );
   }
}

export default App;
