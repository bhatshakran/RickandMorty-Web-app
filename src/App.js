import './App.css';
import { Route, Switch } from 'react-router-dom';
import Search from './Pages/Search';
import Home from './Pages/Home';

function App() {
	return (
		<div className='App'>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/search' component={Search} />
			</Switch>
		</div>
	);
}

export default App;
