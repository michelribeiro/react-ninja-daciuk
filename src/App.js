import React, { Component } from 'react';
import { BrowserRouter as Router, Route, HashRouter } from "react-router-dom";

import Home from "./pages/Home";

class App extends Component {
  render() {
    return (
      <Router>
				<HashRouter>
					<div>
						<Route exact path="/" render={(props) => (
							<Home />
						)} />
					</div>
				</HashRouter>
			</Router>
    )
  }
}

export default App;
