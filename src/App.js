
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './client/Home'

function App() {
  	return (
		<Router>
			<div>
				<Switch>
					{/* <Route path="/edit">
						<Edit />
					</Route>
					<Route path="/add">
						<Add />
					</Route> */}
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
	 	</Router>
  	);
}

export default App;
