import React from 'react';
import { makeStyles } from '@material-ui/styles';

import { Link } from 'react-router-dom';

const useStyles = makeStyles({
	navbar: {
		background: 'none',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '0.5rem 1rem',
		['@media (max-width:780px)']: {
			// eslint-disable-line no-useless-computed-key
			flexDirection: 'column',
			justifyContent: 'center',
		},
	},
	navBrand: {
		fontFamily: 'Maven Pro',
		color: ' #fff',
		background: 'rebeccapurple',
		padding: '1.3rem',
		clipPath:
			'polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)',
	},
	navGroup: {
		display: 'inline-flex',
	},
	navItem: {
		color: 'black',
		listStyle: 'none',
		fontFamily: 'Maven Pro',
		fontSize: '1.5rem',
		padding: '1rem',
		margin: '0 1rem',
		'&:hover': {
			color: 'orangered',
		},
		'&:active': {
			color: '#fff',
		},
		['@media (max-width:780px)']: {
			// eslint-disable-line no-useless-computed-key
			fontSize: '1rem',
			margin: '0 0.6rem',
		},
	},
});
const Navbar = () => {
	const classes = useStyles();
	return (
		<nav className={classes.navbar}>
			<div className={classes.navBrand}>Rick and Morty</div>
			<ul className={classes.navGroup}>
				<Link to='/'>
					<li className={classes.navItem}>Home</li>
				</Link>
				<Link to='/search'>
					<li className={classes.navItem}>Search</li>
				</Link>
				<Link to='/about'>
					<li className={classes.navItem}>About</li>
				</Link>
			</ul>
		</nav>
	);
};

export default Navbar;
