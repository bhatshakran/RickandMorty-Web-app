import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
	ftr: {
		background: '#000133',
		height: '300px',
		color: '#fff',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: ' 0 2rem',
		position: ' relative',
		['@media (max-width:780px)']: {
			// eslint-disable-line no-useless-computed-key
			flexDirection: 'column',
			height: '350px',
			padding: '1rem 0',
			justifyContent: 'center',
		},
	},
	red: {
		color: 'orangered',
	},
	ftrBrand: {
		fontSize: '4rem',
		fontFamily: 'Maven Pro',
		['@media (max-width:780px)']: {
			// eslint-disable-line no-useless-computed-key
			fontSize: '1.5rem',
		},
	},
	ftrGroup: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		textAlign: 'center',
	},
	ftrItem: {
		fontFamily: 'Archivo',
		listStyle: 'none',
		padding: '1rem',
		margin: '0 1rem',
		fontSize: '1.3rem',
		['@media (max-width:780px)']: {
			// eslint-disable-line no-useless-computed-key
			fontSize: '1rem',
			margin: '0.1rem 0',
			padding: '0.3rem',
		},
	},
	copy: {
		position: 'absolute',
		bottom: '10px',
		left: '50%',
		transform: 'translateX(-50%)',
		fontFamily: 'archivo',
	},
});
const Footer = () => {
	const classes = useStyles();
	return (
		<footer className={classes.ftr}>
			<div className={classes.ftrBrand}>
				Rick And <span className={classes.red}>Morty</span>{' '}
			</div>
			<ul className={classes.ftrGroup}>
				<Link to='/'>
					<li className={classes.ftrItem}>Home</li>
				</Link>
				<Link to='/about'>
					<li className={classes.ftrItem}>About</li>
				</Link>
				<Link to='/search'>
					<li className={classes.ftrItem}>Search</li>
				</Link>
				<Link to='#'>
					<li className={classes.ftrItem}>Terms and Conditions</li>
				</Link>
			</ul>
			<p className={classes.copy}>Copyright 2021</p>
		</footer>
	);
};

export default Footer;
