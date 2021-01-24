
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './client/Home'
import Edit from './client/Edit'
import Add from './client/Add'
import { employeeData } from './static_data/employee_data'

function App() {
	if(!localStorage.getItem('employees')){
		localStorage.setItem("employees", JSON.stringify(employeeData) ); // loading initial static data
	}
  	return (
		<Router>
			<div>
				<Switch>
					<Route path="/edit/:id">
						<Edit />
					</Route>
					<Route path="/add">
						<Add />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
	 	</Router>
  	);
}

export default App;
