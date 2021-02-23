import './App.css';
import { Route, Switch } from 'react-router-dom';
import Search from './Pages/Search';
import Home from './Pages/Home';
import About from './Pages/About';

function App() {
	return (
		<div className='App'>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/search' component={Search} />
				<Route path='/about' component={About} />
			</Switch>
		</div>
	);
}

export default App;
